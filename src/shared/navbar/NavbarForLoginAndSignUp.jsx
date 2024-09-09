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
import { Link } from "react-router-dom";

export default function NavbarForLoginAndSignup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {/* navigation items menu */}
        <NavItem />
        {/* navigation items menu */}
      </NavbarContent>

      {/* Menu item for mobile user */}
      <NavbarMenu>
        <NavbarMenuItems />
      </NavbarMenu>
    </Navbar>
  );
}
