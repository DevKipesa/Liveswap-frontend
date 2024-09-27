import React, { useState } from "react";
import MenuIcon from "../assets/icons/menu.svg";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  const menuLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/" },
    { id: 3, name: "FAQ", href: "/" },
    { id: 4, name: "Support", href: "/" },
    { id: 5, name: "Careers", href: "/" },
  ];

  return (
    <>
      <div className="header-container">
        <div className="logo">LIVESWAP</div>
        <div className="menu">
          <div className="menu-links">
            {menuLinks.map((link) => (
              <a key={link.id} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="wallet-btn">
          <button className="primary">Connect Walet</button>
        </div>
        <button className="hamburger" onClick={toggleExpanded}>
          <img src={MenuIcon} />
        </button>
      </div>
      {isExpanded && (
        <div className="menu-overlay">
          <div className="menu-links">
            {menuLinks.map((link) => (
              <a key={link.id} href={link.href}>
                {link.name}
              </a>
            ))}
            <a key="enter-app" href="/">
              Enter App
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
