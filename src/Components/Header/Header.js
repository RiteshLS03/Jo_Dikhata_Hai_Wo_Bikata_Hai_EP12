import React, { useState } from "react";
import { logo, vector } from "../../Images/index"; /* Images for UI */
import { Link } from "react-router-dom";
import { Body } from "../Index";
// import "./Header.css"; //removed because of tailwind css
import useOnline from "../../utils/useOnline";
import Instamart from "../Instamart";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState("true");
  const online = useOnline();
  return (
    <>
      {/* LOGO */}
      <div className="flex mx-32 p-3 justify-between shadow-lg rounded-xl bg-gray-150 ">
        <img className="h-24 p-2" src={logo} alt="logo">
          {/* <Link to="about"></Link> */}
        </img>
        {/* <Link to="home"/>
        <img/> */}
        {/* SEARCHBAR  */}
        {/* <div className="search-nav">
          <input
            type="text"
            id="searchbar"
            placeholder="Search, Order, Enjoy!"
            value={searchText}
            onChange={(e) => {
             setSearchText(e.target.value);
             <Body searchText={searchText} /> //passing the data to body comp
            }}
          />
          <button 
            onClick={() => {
              // need to filter the data
              // const data = filterData(searchText, allRestaurants);
              // setFilteredRestaurants(data);
              <Body searchText={searchText} allRestaurants={searchingData} />
            }}
          >
            Search
          </button>
        </div> */}
        {/* NAVBAR */}
        <li className="flex py-8 text-[#3D4152] font-bold ">
          <ul className="px-6">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              Home
            </Link>{" "}
          </ul>
          <ul className="px-6">Food</ul>
          <ul className="px-6">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/about"
            >
              About
            </Link>
          </ul>
          <ul className="px-6">
            <a href="">
              <img src={vector} alt="cart" />
            </a>
          </ul>
          <ul className="px-6">
            {online ? "🟢" : "🔴"}
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
          </ul>
          <ul className="px-6">
            <Link to="/Instamart">Instamart</Link>
          </ul>
        </li>
      </div>
    </>
  );
}

export default Header;
