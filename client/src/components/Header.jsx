import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
  FaHome,
  FaSearch,
  FaBars,
  FaMoon,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import logo from "../../public/PramodLabs.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const settingsRef = useRef(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSettingsOpen(false);
  };
  const handleOnClose = () => {
    setIsNavOpen(false);
    setIsSettingsOpen(false);
  };

  return (
    <header className="bg-white shadow-md !mb-7 !px-4">
      {/* Top row */}
      <div className="mx-auto px-4">
        {/* max-w-6xl */}
        <div className="flex h-16 items-center justify-between">
          {/* Left: menu toggle and brand */}
          <div className="flex items-center gap-6">
            <button
              aria-label="menu"
              aria-expanded={isNavOpen}
              onClick={() => setIsNavOpen((open) => !open)}
              className="text-orange-600 cursor-pointer inline-flex items-center gap-1"
            >
              <FaBars className="text-[12px]" />{" "}
              <p className="text-[12px] text-black uppercase">menu</p>
            </button>
            <span className="mx-2 inline-block h-10 w-px bg-gray-200" />
            <Link
              to="/"
              className="text-3xl font-extrabold tracking-wider text-orange-600"
            >
              <img src={logo} alt="" />
            </Link>
          </div>

          {/* Right: social icons, controls, search */}
          <div className="flex items-center gap-3 text-gray-600">
            <IconButton to="/facebook">
              <FaFacebookF />
            </IconButton>
            <IconButton to="/google-plus">
              <FaGooglePlusG />
            </IconButton>
            <IconButton to="/twitter">
              <FaTwitter />
            </IconButton>
            <IconButton to="/youtube">
              <FaYoutube />
            </IconButton>

            <span className="mx-2 inline-block h-10 w-px bg-gray-200" />
            <div className="relative" ref={settingsRef}>
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-white text-gray-600 hover:text-amber-600 transition-colors duration-200 cursor-pointer"
              >
                {isLoggedIn ? <FaUser /> : <FaGear />}
              </button>

              {/* Settings Dropdown */}
              <div
                className={`absolute left-0 top-full mt-5 w-44 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-50 ${
                  isSettingsOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <ul className="py-2">
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link
                          to="/account"
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 cursor-pointer"
                        >
                          <FaUser className="text-gray-500" />
                          <span>Account</span>
                        </Link>
                      </li>
                      <li>
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 cursor-pointer">
                          <FaCog className="text-gray-500" />
                          <span>Settings</span>
                        </button>
                      </li>
                      <li className="border-t border-gray-100">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 cursor-pointer"
                        >
                          <FaSignOutAlt className="text-red-500" />
                          <span>Logout</span>
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link
                          onClick={handleOnClose}
                          to="/login"
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 cursor-pointer"
                        >
                          <FaSignInAlt className="text-gray-500" />
                          <span>Login</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleOnClose}
                          to="/signup"
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 cursor-pointer"
                        >
                          <FaUser className="text-gray-500" />
                          <span>Sign Up</span>
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <IconButton>
              <FaMoon />
            </IconButton>
            <Link
              to="/search"
              className="ml-3 hidden items-center gap-2 text-xs text-gray-500 sm:flex"
            >
              <span className="uppercase tracking-wide">Search</span>
              <FaSearch className="text-orange-600" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom navbar */}
      <div
        className={`border-t border-orange-600 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isNavOpen ? "max-h-12" : "max-h-0"
        }`}
      >
        <nav className="mx-auto ">
          <ul
            className={`flex  items-center  gap-2 text-sm font-semibold text-gray-800 transition-opacity duration-300 ${
              isNavOpen ? "h-12 opacity-100" : "h-12 opacity-0"
            }`}
          >
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 bg-orange-600 !px-5 h-12 text-white"
              >
                <FaHome />
                <span className="uppercase">Home</span>
              </Link>
            </li>

            {[
              "Tech",
              "Sports",
              "Fashion",
              "Business",
              "Education",
              "ShareMarket",
            ].map((label) => (
              <li key={label} className="group relative">
                <Link
                  to={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center uppercase px-4 hover:text-orange-600"
                >
                  <span>{label}</span>
                  <span className="text-orange-600">▾</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const IconButton = ({ to = "#", children }) => (
  <Link
    to={to}
    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-white text-gray-600 hover:text-amber-600"
  >
    {children}
  </Link>
);

export default Header;
