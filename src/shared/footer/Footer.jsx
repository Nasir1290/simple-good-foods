import React from "react";
import LogoImage from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mx-4 mt-32 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:justify-between md:items-center md:mx-32">
          {/* Logo and Navigation Links */}
          <div className="flex flex-col items-center md:flex-row md:items-start">
            {/* Logo */}
            <Link to="/" className="mb-4 md:mb-0 md:mr-8">
              <img
                src={LogoImage}
                className="hidden md:block md:h-24 md:w-24 rounded-full"
                alt="Logo"
              />
            </Link>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-2 md:gap-x-36 text-center md:text-left">
              <Link to="/" className="hover:text-[#6ea963] transition-colors">
                Home
              </Link>
              <Link
                to="/our-menus"
                className="hover:text-[#6ea963] transition-colors"
              >
                Our Menus
              </Link>
              <Link
                to="/meal-plans"
                className="hover:text-[#6ea963] transition-colors"
              >
                Meal Plans
              </Link>
              <Link
                to="/catering"
                className="hover:text-[#6ea963] transition-colors"
              >
                Catering
              </Link>
              <Link
                to="/how-it-works"
                className="hover:text-[#6ea963] transition-colors"
              >
                How it Works
              </Link>
              <Link
                to="/testimonials"
                className="hover:text-[#6ea963] transition-colors"
              >
                Testimonials
              </Link>
              <Link
                to="/faq"
                className="hover:text-[#6ea963] transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Subscription and Social Links */}
          <div className="mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Subscribe to our email alerts
            </h4>
            <div className="flex items-center mb-4">
              <input
                type="text"
                name="email"
                placeholder="Your email"
                className="border px-4 py-2 rounded-l-lg w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#6ea963]"
              />
              <button className="bg-[#6ea963] text-white px-4 py-2 rounded-r-lg font-semibold transition-all duration-300 hover:bg-green-700">
                Subscribe
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-600 dark:text-gray-300">


              <Link to="https://facebook.com" target="_blank" rel="noreferrer">
                <IoLogoFacebook className="hover:text-[#6ea963] transition-colors" />
              </Link>
              <Link to="https://twitter.com" target="_blank" rel="noreferrer">
                <IoLogoTwitter className="hover:text-[#6ea963] transition-colors" />
              </Link>
              <Link to="https://linkedin.com" target="_blank" rel="noreferrer">
                <IoLogoLinkedin className="hover:text-[#6ea963] transition-colors" />
              </Link>
              <Link to="https://instagram.com" target="_blank" rel="noreferrer">
                <IoLogoInstagram className="hover:text-[#6ea963] transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex w-full py-4 justify-center text-center bg-slate-700 text-white dark:text-cyan-500">
          © {new Date().getFullYear()} Nasir Mollah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
