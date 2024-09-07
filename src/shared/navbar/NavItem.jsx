import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

export default function NavItem() {

  return (
    <div className="flex flex-wrap gap-4 font-semibold">
      <Tabs color="primary" variant={"underlined"} aria-label="Tabs variants">
        <Tab key="home" title="Home" />
        <Tab key="our-menus" title="Our menus" />
        <Tab key="meal-plans" title="Meal plans" />
        <Tab key="catering" title="Catering" />
        <Tab key="how-it-word" title="How it work" />
        <Tab key="testimonial" title="Testimonial" />
        <Tab key="faq" title="FAQ" />
      </Tabs>
    </div>
  );
}
