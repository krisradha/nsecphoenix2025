import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../static/img/logo1.png";
import { HiMenuAlt1, HiX } from "react-icons/hi";

function Navbar() {
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = () => {
    setNavState(!navState);
  };

  useEffect(() => {
    setNavState(false);
  }, [location]);

  return (
    <div className="navbar flex z-50 w-full bg-white fixed top-0 left-0 shadow-md">
      {/* Mobile menu icon */}
      <div
        className="absolute md:hidden top-4 left-3 z-[1000]"
        onClick={handleNav}
      >
        {!navState ? (
          <HiMenuAlt1 className="h-8 w-8" />
        ) : (
          <HiX className="h-8 w-8 text-white bg-red-500 rounded" />
        )}
      </div>

      {/* Logo */}
      <div
        className="icon md:w-30 w-full flex justify-center py-2 md:py-3 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <img src={logo} alt="Phoenix Logo" width="100px" />
      </div>

      {/* Menu */}
      <div
        className={`menu flex justify-center fixed top-0 left-0 w-screen md:w-70 h-full md:h-auto md:relative bg-white/40 backdrop-blur-[8px] md:bg-transparent md:block ${
          !navState ? "hidden" : "flex"
        }`}
      >
        <ul className="flex flex-col justify-center items-center md:flex-row gap-6 md:gap-10 font-medium py-3 text-[1.2rem] md:text-[0.9rem]">
          <NavLink to="home">
            <li className="text-center">Home</li>
          </NavLink>
          <NavLink to="wings">
            <li className="text-center">Wings</li>
          </NavLink>
          <NavLink to="events">
            <li className="text-center">Events</li>
          </NavLink>
          <NavLink to="gallery">
            <li className="text-center">Gallery</li>
          </NavLink>
          <NavLink to="core">
            <li className="text-center">Core Team</li>
          </NavLink>
          <NavLink to="webteam">
            <li className="text-center">Web Team</li>
          </NavLink>
          <NavLink to="contactus">
            <li className="text-center">Contact Us</li>
          </NavLink>

          {/* Community Link */}
          <li>
            <a
              href="https://chat.whatsapp.com/LolTbdEVT6MKGJhDPFWXMe?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-bold text-center"
            >
              Community
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
