import React from 'react';
import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { menuItems } from "../menuItems";

const fontsiz = {
    fontSize : "20px"

  };
const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }

  
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* {depthLevel} */}
        {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
          <a  href={'#'}>{items.title}</a> 
          {/* {depthLevel} */}
            {/* {depthLevel > 0 ? <span></span> : <span></span> } */}
            {/* <span className="arrow" /> */}
          </button>
          {depthLevel >= 2 ? 
          <>
          {/* {depthLevel} */}
<button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
{depthLevel >= 2   ? <a style={fontsiz} href={'#'}>{items.title}</a> :  <a href={'#'}>{items.title}</a>}
            {/* {depthLevel > 0 ? <span></span> : <span></span> } */}
            {/* <span className="arrow" /> */}
          </button>
          {items.submenu.map((item) => (
            <li class="nav-item" key={item.id}><a href="#" class="nav-link text-small pb-0">{item.title}</a></li>
      
    ))}
        
            <ul>
              
    
  </ul>
  </>
    :
     <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} /> }
         
        </>
      ) : (

        <span>
  
            {depthLevel >= 2   ?  <a style={fontsiz} href={'#'}>{items.title}</a> : <a href={'#'}>{items.title}</a>}  
            </span>  

      )}
            
    </li>
    
  );
  
};

export default MenuItems;