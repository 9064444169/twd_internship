import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import Web from "./web/Web";
import Mobile from "./mobile/Mobile";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://thewebdev.tech/static/ce59ef6831a6ff9cba3b957baece8d8c/a3e81/logo.webp"
          alt=""
        />
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="menuIcon" fontSize="large" />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
