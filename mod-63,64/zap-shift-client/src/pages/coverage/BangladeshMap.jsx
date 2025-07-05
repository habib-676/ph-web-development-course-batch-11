import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import districtsData from "./districtsData";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const FlyToDistrict = ({ coordinates }) => {
  const map = useMap();
  useEffect(() => {
    if (coordinates) {
      map.flyTo(coordinates, 10, {
        duration: 1.5,
      });
    }
  }, [coordinates, map]);
  return null;
};

const BangladeshMap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [targetDistrict, setTargetDistrict] = useState(null);
  const popupRefs = useRef([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const match = districtsData.find((district) =>
      district.district.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (match) {
      setTargetDistrict(match);
      const index = districtsData.indexOf(match);
      // Open the popup after map fly animation
      setTimeout(() => {
        popupRefs.current[index]?.openPopup();
      }, 1500);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="space-y-4">
      {/* Search box */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-2 items-center justify-center"
      >
        <input
          type="text"
          placeholder="Search district name..."
          className="input input-bordered w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {/* Map */}
      <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <MapContainer
          center={[23.8103, 90.4125]}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {targetDistrict && (
            <FlyToDistrict
              coordinates={[targetDistrict.latitude, targetDistrict.longitude]}
            />
          )}

          {districtsData.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
              ref={(ref) => (popupRefs.current[index] = ref)}
            >
              <Popup>
                <div className="font-semibold">{district.district}</div>
                <div className="text-sm">
                  <strong>Areas:</strong> {district.covered_area.join(", ")}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default BangladeshMap;
