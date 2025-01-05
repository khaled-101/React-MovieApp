import React, { useState } from "react";
import { Link, NavLink } from "react-router";

export default function MyNavbar() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <NavLink className="main-link" to="/movielist">
            {" "}
            Movie App
          </NavLink>
        </div>
        <ul>
          <li>
            {" "}
            <NavLink className="link" to="/movielist">
              {" "}
              MovieList
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink className="link" to="/watchlist">
              {" "}
              Watch List
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="link" to="/registration">
              {" "}
              
            </NavLink>
          </li>
        </ul>

        
      </nav>
    </>
  );
}
