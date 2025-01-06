import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LanguageContext from "../contexts/LanguageContext";

export default function MyNavbar() {
  const currentWatchlist = useSelector((state) => state.myWatchlist.items);
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <NavLink className="main-link" to="/movielist">
            Movie App
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink className="link" to="/movielist">
              MovieList
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/watchlist">
              Watch List ({currentWatchlist?.length || 0})
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/registration">
              Registration
            </NavLink>
          </li>
        </ul>
        <div className="language-dropdown">
          <select
           
          >
            <option onClick={() => setLang("en")} value="en">English</option>
            <option onClick={() => setLang("ar")} value='ar'>Arabic</option>
          </select>
        </div>
      </nav>
    </>
  );
}
