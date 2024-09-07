import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Image,
} from "@nextui-org/react";
// import { SearchIcon } from "./SearchIcons.jsx";
import LogoImage from "../../assets/logo.png";
import NavItem from "./NavItem.jsx";
import NavbarMenuItems from "./NavbarMenuItems.jsx";
import { TiShoppingCart } from "react-icons/ti";

export default function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="shadow py-2"
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
          <Image
            className=" w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer"
            src={LogoImage}
          />
        </NavbarBrand>

        {/* <h4 className=" mx-2 font-bold">Shop</h4> */}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* navigation items menu */}
        <NavItem />
        {/* navigation items menu */}
      </NavbarContent>

      <NavbarContent justify="end" className="items-center">
        {/* Search Input added here */}

        {/* add a cart icon for add to cart */}

        {/* user menus like logout card and many thing to added here */}
        {/* Avatar Dropdown added here */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          {/* user profile dropdown */}
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* shoping cart */}
        <div className=" border-2 border-blue-500 h-10 w-10 rounded-full text-indigo-400 font-bold flex items-center justify-center">
          < TiShoppingCart  className="font-bold h-6 w-6"/>
        </div>
      </NavbarContent>

      {/* Menu item for mobile user */}
      <NavbarMenu>
        <NavbarMenuItems />
      </NavbarMenu>
    </Navbar>
  );
}
