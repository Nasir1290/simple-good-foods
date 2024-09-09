import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  Image,
} from "@nextui-org/react";
// import { SearchIcon } from "./SearchIcons.jsx";
import LogoImage from "../../assets/logo.png";
import NavItem from "./NavItem.jsx";
import NavbarMenuItems from "./NavbarMenuItems.jsx";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosLogOut } from "react-icons/io";
import useAuth from "../../hooks/useAuth.js";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { auth, setAuth } = useAuth();
  const firstLetter = auth?.username?.charAt(0);
  const navigate = useNavigate();

  const handleLogoutClick = (event) => {
    event.preventDefault();
    setAuth({});
    navigate("/login");
  };

  return (
    <Navbar
      className=" shadow py-2"
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {/* company logo */}
        <NavbarBrand>
          <Link to="/">
            <Image
              className=" w-12 h-12 md:w-20 md:h-20 rounded-full cursor-pointer"
              src={LogoImage}
            />
          </Link>
        </NavbarBrand>

        {/* <h4 className=" mx-2 font-bold">Shop</h4> */}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* navigation items menu */}
        <NavItem />
        {/* navigation items menu */}
      </NavbarContent>

      <NavbarContent justify="end" className=" items-center">
        {/* Search Input added here */}

        {auth?.email ? (
          <>
            {/* logout button */}
            <button
              className=" font-bold text-2xl bg-red-400 text-white px-2 py-1 rounded-md"
              onClick={handleLogoutClick}
            >
              <IoIosLogOut />
            </button>

            {/* Avatar Dropdown added here */}
            <Link to="/user-profile"
            className=" border-3 border-blue-600 rounded-full"
            >
              {auth?.userImage ? (
                <img
                  className="h-8 w-8 rounded-full object-cover overflow-hidden"
                  src={auth?.userImage}
                  alt={auth.username}
                />
              ) : (
                <div className="flex items-center justify-center bg-gray-400 h-8 w-8 rounded-full text-white text-xl font-semibold uppercase">
                  {firstLetter}
                </div>
              )}
            </Link>
          </>
        ) : (
          <>
            {/* signup login and logout button */}
            <Link to="/login">
              <button className="px-4 py-2 bg-[#6ea963] text-white text-small rounded-md text-center">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-2 py-2 text-[#6ea963] border-1 text-small border-[#6ea963] rounded-md text-center">
                Signup
              </button>
            </Link>
          </>
        )}
        {/* shoping cart */}
        <div className=" border-2 border-blue-500 h-9 w-9 rounded-full text-indigo-400 font-bold flex items-center justify-center">
          <TiShoppingCart className="font-bold h-6 w-6" />
        </div>
      </NavbarContent>

      {/* Menu item for mobile user */}
      <NavbarMenu>
        <NavbarMenuItems />
      </NavbarMenu>
    </Navbar>
  );
}
