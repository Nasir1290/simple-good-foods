import { NavbarItem, Link } from "@nextui-org/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavItem() {
  const location = useLocation();
  const navigate = useNavigate();

  const navigations = [
    { name: "Home", path: "/" },
    { name: "Our Menus", path: "/ourmenus" },
    { name: "Meal Plans", path: "/mealplans" },
    { name: "Catering", path: "/catering" },
    { name: "How It Works", path: "/howitwork" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "FAQ", path: "/faq" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {navigations.map((nav, index) => (
        <NavbarItem key={index}>
          <Link
            color="foreground"
            onClick={() => handleNavigation(nav.path)}
            className={` cursor-pointer font-semibold text-md text-[#656565] ${
              location.pathname === nav.path ? "text-primary" : ""
            }`}
          >
            {nav.name}
          </Link>
        </NavbarItem>
      ))}
    </>
  );
}

