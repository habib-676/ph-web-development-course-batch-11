import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-6">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/posts"}>
          <li>Posts</li>
        </Link>
        <Link href={"/meals"}>
          <li>Meals</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
