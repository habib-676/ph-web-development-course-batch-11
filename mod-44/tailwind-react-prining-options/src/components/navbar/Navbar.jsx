import React, { useState } from "react";
import NavItem from "./NavItem";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  const links = navItems.map((item) => (
    <NavItem key={item.id} item={item}></NavItem>
  ));

  return (
    <nav className="flex justify-between m-5">
      <span className="flex gap-5" onClick={() => setOpen(!open)}>
        {open ? <X></X> : <Menu className="md:hidden" />}

        <ul className={`md:hidden absolute bg-amber-50 text-black p-3 rounded-2xl duration-500 ${open? 'top-12': '-top-64'}`}>
          {links}
        </ul>
        <h3 className="hidden md:block">My NavBar</h3>
      </span>

      <ul className="hidden md:flex justify-around gap-5 ">{links}</ul>

      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
