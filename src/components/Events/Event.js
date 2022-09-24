import React from "react";
import "./Event.css";
import Cards from "./Cards";

const Event = () => {
  return (
    <div className="events">
      <div className="event">
        <div className="event__container">
          <h2 className="event__head">Events and Bootcamps</h2>
          <div className="event__row">
            <Cards
              title="🔴 12 hours Web Development Bootcamp"
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663518581/New-blogs/ankit-twd-project/12_hours_xqe8ag.webp"
              text="By Nabendu Biswas"
              date="SEPTEMBER 24,2022 8:00 PM"
              link="https://youtu.be/UnyqaHEX6kw"
            />
            <Cards
              title="Learn about Web Development"
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663476353/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_10.04.24_vetuft.jpg"
              text="By Nabendu Biswas"
              date="SEPTEMBER 24,2022 8:00 PM"
              link="https://youtu.be/UnyqaHEX6kw"
            />
            <Cards
              title="Learn HTML in 1 Hour."
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663476341/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_10.07.59_fzbuzr.jpg"
              text="By Nabendu Biswas"
              date="SEPTEMBER 24,2022 8:00 PM"
            />
            <Cards
              title="TWD Internship for the Students "
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663476347/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_10.07.57_mbpidv.jpg"
              text="By Nabendu Biswas"
              date="SEPTEMBER 24,2022 8:00 PM"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
