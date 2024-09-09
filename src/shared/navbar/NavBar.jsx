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
import Loading from "../../components/general/Loading.jsx";
import useCart from "../../hooks/useCart.js";

export default function NavbarPage() {
  const { user, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstLetter = user?.displayName.charAt(0);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const { cartData, setCartData, addToCart, removeFromCart } = useCart();

  const handleLogoutClick = async (event) => {
    event.preventDefault();

    try {
      // Perform Firebase signOut
      await signOut(auth);
      // After signOut, navigate to the login page
      // navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      // Optionally, you can add an error toast message here
    }
  };

  if (loading) {
    return <Loading />;
  }

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

        {user?.email ? (
          <>
            {/* logout button */}
            <button
              className=" font-bold text-2xl bg-red-400 text-white px-2 py-1 rounded-md"
              onClick={handleLogoutClick}
            >
              <IoIosLogOut />
            </button>

            {/* Avatar Dropdown added here */}
            <Link
              to="/user-profile"
              className=" border-3 border-blue-600 rounded-full"
            >
              {user?.photoURL ? (
                <img
                  className="h-8 w-8 rounded-full object-cover overflow-hidden"
                  src={user?.photoURL}
                  alt={user?.displayName}
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
        <Link to="/cart-details">
          <div className="relative border-2 cursor-pointer border-blue-500 h-9 w-9 rounded-full text-indigo-400 font-bold flex items-center justify-center">
            <TiShoppingCart className="font-bold h-6 w-6" />
            {cartData.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartData.length}
              </span>
            )}
          </div>
        </Link>
      </NavbarContent>

      {/* Menu item for mobile user */}
      <NavbarMenu>
        <NavbarMenuItems />
      </NavbarMenu>
    </Navbar>
  );
}
