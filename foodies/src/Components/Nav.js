import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "/Users/bodouralrashidi/Desktop/FullStack/MiniProject/FS-Library/fs-library/src/ArchiveLogo-removebg-preview.png";

function Nav() {
  return (
      
    <nav >
      <div className="nav">
        <div>
        <NavLink className="navitem" to="/home">
            Home
          </NavLink>
        </div>
        <div >
          <NavLink className="navitem" to="/cat"  >
            Categories
          </NavLink>
        </div>
        <div className="navitem-right" >
          <NavLink className="navitem " to="/user-page">
              <img src=""/>
            Profile
          </NavLink>
        </div>
        <div>
         
        </div>
      </div>
    </nav>
  );
}

export default Nav;
