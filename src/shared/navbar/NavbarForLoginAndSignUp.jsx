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
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../components/firebase/firebaseConfig.js";

export default function NavbarPage() {
  const { user } = useAuth();
  console.log("from nav", user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstLetter = user?.displayName.charAt(0);
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleLogoutClick = async (event) => {
    event.preventDefault();

    try {
      // Perform Firebase signOut
      await signOut(auth);
      // After signOut, navigate to the login page
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      // Optionally, you can add an error toast message here
    }
  };

  return (
    <Navbar
      className=" shadow py-2"
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent justify="end" className=" items-center">
        <Link to="/cart-details">
          <div className=" border-2 cursor-pointer border-blue-500 h-9 w-9 rounded-full text-indigo-400 font-bold flex items-center justify-center">
            <TiShoppingCart className="font-bold h-6 w-6" />
          </div>
        </Link>
      </NavbarContent>

    </Navbar>
  );
}
