import React from "react";

const NavItem = ({ item }) => {
  return (
    <li>
      <a className="hover:bg-amber-400" href={item.url}>{item.name}</a>
    </li>
  );
};

export default NavItem;
