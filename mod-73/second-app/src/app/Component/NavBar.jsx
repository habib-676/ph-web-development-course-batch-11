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
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
