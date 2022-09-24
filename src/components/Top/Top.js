import { Avatar } from "@material-ui/core";
import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <div className="top">
      <div className="top__left">
        <h1 className="top__title">Build Your Career in Web Development</h1>
        <p className="top__info">
          Learn Web Development which includes
          HTML/CSS,JavaScript,React.js,Node.js and many more with our expert
          trainers.
        </p>
        <button className="top__btn">Explore Courses →</button>
      </div>
      <div className="top__right">
        <div className="image">
          <img
            src="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663476339/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_10.08.00_sezxz5.jpg"
            alt="TWD"
          />
        </div>
        <div className="avatar">
          <Avatar src="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663518212/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_20.58.39_2_r9xqtp.jpg" />
          <Avatar src="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663518211/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_20.58.39_3_yy8zm7.jpg" />
          <p className="top__student">
            100+ Students have been placed in their dream company
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
