

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  Image,
} from "@nextui-org/react";
import LogoImage from "../../assets/logo.png";
import NavItem from "./NavItem.jsx";
import NavbarMenuItems from "./NavbarMenuItems.jsx";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import useAuth from "../../hooks/useAuth.js";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../components/firebase/firebaseConfig.js";
import Loading from "../../components/general/Loading.jsx";
import useCart from "../../hooks/useCart.js";
import { toast } from "react-toastify";

export default function NavbarPage() {
  const { user, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = getAuth(app);
  const { cartData } = useCart();
  const firstLetter = user?.displayName?.charAt(0);

  const toastValue = {
    position: "top-right",
    autoClose: 1800,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  const handleLogoutClick = async (event) => {
    event.preventDefault();

    try {
      await signOut(auth);
      toast.warn("Logged out successfully", toastValue);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

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
        <NavbarBrand>
          <Link to="/">
            <Image
              className="w-12 h-12 md:w-20 md:h-20 rounded-full cursor-pointer"
              src={LogoImage}
              alt="Logo"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 justify-center">
        <NavItem />
      </NavbarContent>

      <NavbarContent justify="end" className="flex items-center gap-4">
        {user?.email ? (
          <>
            <button
              className="text-2xl bg-red-500 text-white px-2 py-1 rounded-md"
              onClick={handleLogoutClick}
            >
              <IoIosLogOut />
            </button>
            <Link
              to="/user-profile"
              className="border-2 border-blue-600 rounded-full"
            >
              {user?.photoURL ? (
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              ) : (
                <div className="flex items-center justify-center bg-gray-400 h-8 w-8 rounded-full text-white text-xl uppercase">
                  {firstLetter}
                </div>
              )}
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="px-4 py-2 bg-green-600 text-white rounded-md">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md">
                Signup
              </button>
            </Link>
          </>
        )}

        <Link to="/cart-details" className="relative flex items-center">
          <TiShoppingCart className="h-6 w-6 text-indigo-400" />
          {cartData.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartData.length}
            </span>
          )}
        </Link>

        <Link to="/dashboard" className="relative flex items-center">
          <RxDashboard className="h-6 w-6 text-indigo-400" />
        </Link>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItems />
      </NavbarMenu>
    </Navbar>
  );
}
