import React, { useState } from "react";
import "./Navbar.css";

import { Dropdown } from "primereact/dropdown";
function Navbar({ users,ticket}) {
 const [type,setType]=useState(null);
  const status=[...new Set(ticket.map(item=>item.status))];
  
  const priority=[...new Set(ticket.map(item=>item.priority))];
  const userAvailability=[...new Set(users.map(item=>item.available))];
 
  const optionstype=[...status,...priority,...userAvailability];
 
  return (
    <nav className="navbar-settings">
      <div className="navbar-menu">
        <Dropdown
          options={optionstype}
         
          
          optionLabel="name"
          placeholder="Select a City"
          className="w-full md:w-14rem"
       
        />

        <h1>Hero Section</h1>

      
      </div>
    </nav>
  );
}

export default Navbar;
