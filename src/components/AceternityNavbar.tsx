import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, Instagram } from "lucide-react";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

const AceternityNavbar: React.FC = () => {
  const navItems: NavItem[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      link: "https://instagram.com/newcohorts.com",
      icon: <Instagram size={16} />,
    },
  ];

  return (
    <FloatingNav
      navItems={navItems}
      className="top-4"
    />
  );
};

export default AceternityNavbar;
