import React from 'react';
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import { useState, useEffect, useRef } from "react";




const NavBar = () => {

  
useEffect(() => {
  var names = menuItems;
  localStorage.setItem("names", JSON.stringify(names));
  // var storedNames = JSON.parse(localStorage.getItem("names"));
  // console.log(storedNames);

  });


  return (
    <nav>
      <ul className="menus">
        {JSON.parse(localStorage.getItem("names")).map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;