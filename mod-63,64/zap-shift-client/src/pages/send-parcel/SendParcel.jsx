import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
import districtsData from "../coverage/districtsData";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  // tracking id :
  const generateTrackingId = () => {
    const timestamp = dayjs().format("YYYYMMDDHHmmss");
    const randomPart = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
    return `TRK-${timestamp}-${randomPart}`;
  };

  // sender
  const [selectedSenderRegion, setSelectedSenderRegion] = useState("");
  const uniqueRegions = [...new Set(districtsData.map((d) => d.region))];

  const getServiceCenters = (region) =>
    districtsData
      .filter((d) => d.region === region)
      .flatMap((d) => d.covered_area);

  //   receiver
  const [selectedReceiverRegion, setSelectedReceiverRegion] = useState("");

  //   form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const watchType = watch("type");

  const onSubmit = (data) => {
    const isSameCity =
      data.sender_center.trim().toLowerCase() ===
      data.receiver_center.trim().toLowerCase();

    const weight = parseFloat(data.weight || 0);
    let cost = 0;

    if (data.type === "document") {
      cost = isSameCity ? 60 : 80;
    } else {
      if (weight <= 3) {
        cost = isSameCity ? 110 : 150;
      } else {
        const extraKg = weight - 3;
        if (isSameCity) {
          cost = 110 + extraKg * 40;
        } else {
          cost = 150 + extraKg * 40 + 40;
        }
      }
    }

    toast((t) => (
      <div className="space-y-2">
        <p>
          📦 Delivery Cost: <b>৳{cost}</b>
        </p>
        <button
          className="btn btn-sm btn-success"
          onClick={() => {
            toast.dismiss(t.id);
            handleConfirm(data, cost);
          }}
        >
          ✅ Confirm & Submit
        </button>
      </div>
    ));
  };

  const { user } = useAuth();
  const handleConfirm = (data, cost) => {
    const tracking_id = generateTrackingId();
    const finalData = {
      ...data,
      cost,
      created_by: user.email,
      delivery_status: "not_collected",
      payment_status: "unpaid",
      tracking_id,
      creation_date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    };

    console.log("✅ Saved to DB:", finalData); // Replace with DB logic
    toast.success("Parcel submitted successfully!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-4 space-y-6"
    >
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">📦 Send a Parcel</h1>
        <p className="text-gray-500">
          Fill out the form to schedule your parcel pickup & delivery
        </p>
      </div>

      {/* Parcel Info */}
      <div className="bg-base-200 p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Parcel Info</h2>

        <div className="space-y-4">
          <div>
            <label className="label">Type</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="document"
                  {...register("type", { required: true })}
                  className="radio"
                />
                Document
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="non-document"
                  {...register("type", { required: true })}
                  className="radio"
                />
                Non-Document
              </label>
            </div>
            {errors.type && (
              <span className="text-error text-sm">Type is required</span>
            )}
          </div>

          <div className="flex justify-start w-full items-center gap-5">
            <div>
              <label className="label">Name</label>
              <input
                {...register("title", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.title && (
                <span className="text-error text-sm">Title is required</span>
              )}
            </div>

            {watchType === "non-document" && (
              <div>
                <label className="label">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  {...register("weight")}
                  className="input input-bordered w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sender Info */}
        <div className="bg-base-200 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Sender Info</h2>
          <div className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                {...register("sender_name", { required: true })}
                className="input input-bordered w-full"
                defaultValue="Your Name"
              />
            </div>

            <div>
              <label className="label">Contact</label>
              <input
                {...register("sender_contact", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Region</label>
              <select
                {...register("sender_region", { required: true })}
                className="select select-bordered w-full"
                onChange={(e) => setSelectedSenderRegion(e.target.value)}
              >
                <option value="">Select Region</option>
                {uniqueRegions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">Service Center</label>
              <select
                {...register("sender_center", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Center</option>
                {[...new Set(getServiceCenters(selectedSenderRegion))].map(
                  (area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  )
                )}
              </select>
            </div>

            <div>
              <label className="label">Address</label>
              <input
                {...register("sender_address", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Pickup Instructions</label>
              <textarea
                {...register("pickup_instruction", { required: true })}
                className="textarea textarea-bordered w-full"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Receiver Info */}
        <div className="bg-base-200 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Receiver Info</h2>
          <div className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                {...register("receiver_name", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Contact</label>
              <input
                {...register("receiver_contact", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Region</label>
              <select
                {...register("receiver_region", { required: true })}
                className="select select-bordered w-full"
                onChange={(e) => setSelectedReceiverRegion(e.target.value)}
              >
                <option value="">Select Region</option>
                {uniqueRegions.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">Service Center</label>
              <select
                {...register("receiver_center", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select center</option>
                {getServiceCenters(selectedReceiverRegion).map((center) => (
                  <option key={center} value={center}>
                    {center}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">Address</label>
              <input
                {...register("receiver_address", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Delivery Instructions</label>
              <textarea
                {...register("delivery_instruction", { required: true })}
                className="textarea textarea-bordered w-full"
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <input
          className="btn btn-primary w-full md:w-1/2"
          type="submit"
          value="Submit"
        />
      </div>

      <Toaster position="top-center" />
    </form>
  );
};

export default SendParcel;
