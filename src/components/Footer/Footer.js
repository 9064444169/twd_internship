import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <span className="footer__name">TWD</span>
      <span>©{year} Nabendu Biswas Founder of (TWD)</span>
      <span>Privacy • Terms • Contact</span>
      <hr />
      <div className="footer__iconContainer">
        <a href="https://www.instagram.com" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://www.facebook.com/groups/speakenglishhub"
          target="__blank"
        >
          <i class="fab fa-facebook-square fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
