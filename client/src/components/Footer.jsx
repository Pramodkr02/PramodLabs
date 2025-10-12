import React from "react";
import { Link } from "react-router-dom";
import {
  FaTumblr,
  FaLinkedinIn,
  FaYoutube,
  FaGooglePlusG,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import logo from "../../public/PramodLabs.png";

const Footer = () => {
  const leftYear = new Date().getFullYear();
  return (
    <footer className="bg-white bg-shdw mt-7">
      <div className="mx-auto max-w-6xl px-14 py-12 grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Left: Brand and copyright */}
        <div className="flex flex-col gap-4 border-r border-[#00000065]">
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-wider text-orange-600"
          >
            <img src={logo} alt="" />
          </Link>
          <div className="text-sm text-gray-600">
            <div>
              © {leftYear}{" "}
              <Link to="/" className="hover:text-orange-600">
                <span className="font-medium">PramodLabs</span>
              </Link>{" "}
              All rights reserved.
            </div>
          </div>
        </div>

        {/* Middle: Links columns */}
        <div className="grid grid-cols-2 gap-8 px-4 py-1 border-r border-[#00000065]">
          <ul className="space-y-2 text-gray-800 font-medium">
            <li>
              <Link to="/about" className="hover:text-orange-600">
                About
              </Link>
            </li>

            <li>
              <Link to="/faq" className="hover:text-orange-600">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="space-y-2 text-gray-800 font-medium">
            <li>
              <Link to="/contact" className="hover:text-orange-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/policy" className="hover:text-orange-600">
                Policy
              </Link>
            </li>
            <li>
              <Link to="/founder-bio" className="hover:text-orange-600">
                Founder(CEO)
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Social icons and subscribe */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-gray-700">
            <IconLink to="/tumblr">
              <FaTumblr />
            </IconLink>
            <IconLink to="/linkedin">
              <FaLinkedinIn />
            </IconLink>
            <IconLink to="/youtube">
              <FaYoutube />
            </IconLink>
            <IconLink to="/google-plus">
              <FaGooglePlusG />
            </IconLink>
            <IconLink to="/twitter">
              <FaTwitter />
            </IconLink>
            <IconLink to="/facebook">
              <FaFacebookF />
            </IconLink>
          </div>

          <form className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Email Address ..."
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

const IconLink = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 text-gray-700 hover:text-orange-600"
  >
    {children}
  </Link>
);

export default Footer;
