import React from "react";
import NavItem from "./NavItem";

const navItems = [
  {
    id: 1,
    name: "Home",
    url: "/home",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-around gap-5">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item}></NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
