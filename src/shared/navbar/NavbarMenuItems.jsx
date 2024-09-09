import { Link, NavbarMenuItem } from '@nextui-org/react';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const NavbarMenuItems = () => {
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
    // <NavbarMenuItem className='mt-12'>
    //   <Link color="primary" className="w-full" size="md">
    //     Home
    //   </Link>

    //   <Link color="foreground" className="w-full" size="md">
    //     Our menus
    //   </Link>

    //   <Link color="foreground" className="w-full" size="md">
    //     Meal plans
    //   </Link>

    //   <Link color="foreground" className="w-full" size="md">
    //     Catering
    //   </Link>
    //   <Link color="foreground" className="w-full" size="md">
    //     How it work
    //   </Link>
    //   <Link color="foreground" className="w-full" size="md">
    //     Testimonial
    //   </Link>
    //   <Link color="foreground" className="w-full" size="md">
    //     FAQ
    //   </Link>
    // </NavbarMenuItem>
    <div className=' mt-12'>
      {navigations.map((nav, index) => (
        <NavbarMenuItem key={index}>
          <Link
            color="foreground"
            onClick={() => handleNavigation(nav.path)}
            className={` cursor-pointer font-semibold text-small ${
              location.pathname === nav.path ? "text-primary" : ""
            }`}
          >
            {nav.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </div>
  );
}

export default NavbarMenuItems
