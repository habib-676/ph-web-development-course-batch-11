"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchForMeal = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathName}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div>
      <input
        type="text"
        className="bg-white m-7 text-black"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchForMeal;
