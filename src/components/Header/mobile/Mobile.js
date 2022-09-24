import React from "react";
import "./Mobile.css";
import CloseIcon from "@material-ui/icons/Close";

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon">
        <CloseIcon fontSize="large" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#about">About</a>
        </div>
        <div className="mobile-option">
          <a
            href="https://hkhome.dorik.io/webinar"
            target="_blank"
            rel="noreferrer"
          >
            Webinar
          </a>
        </div>
        <div className="mobile-option">
          <a href="#memberships">Memberships</a>
        </div>
        <div className="mobile-option">
          <a href="#reviews">Reviews</a>
        </div>
        <div className="mobile-option">
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
