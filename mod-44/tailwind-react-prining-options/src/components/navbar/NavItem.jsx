import React from "react";

const NavItem = ({ item }) => {
  return (
    <li>
      <a href={item.url}>{item.name}</a>
    </li>
  );
};

export default NavItem;
