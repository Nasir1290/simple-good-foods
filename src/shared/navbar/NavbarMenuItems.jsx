import { Link, NavbarMenuItem } from '@nextui-org/react';
import React from 'react'

const NavbarMenuItems = () => {
  return (
    <NavbarMenuItem>
      <Link color="primary" className="w-full" size="lg">
        Home
      </Link>

      <Link color="foreground" className="w-full" size="lg">
        Our menus
      </Link>

      <Link color="foreground" className="w-full" size="lg">
        Meal plans
      </Link>

      <Link color="foreground" className="w-full" size="lg">
        Catering
      </Link>
      <Link color="foreground" className="w-full" size="lg">
        How it work
      </Link>
      <Link color="foreground" className="w-full" size="lg">
        Testimonial
      </Link>
      <Link color="foreground" className="w-full" size="lg">
        FAQ
      </Link>
    </NavbarMenuItem>
  );
}

export default NavbarMenuItems
