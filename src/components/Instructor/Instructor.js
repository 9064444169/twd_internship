import React from "react";
import "./Instructor.css";
import Tutor from "./Tutor";

const Instructor = () => {
  return (
    <div className="instructors">
      <div className="instructor">
        <div className="instructor__container">
          <h2 className="instructor__head">Instructors in TWD</h2>
          <div className="instructor__row">
            <Tutor
              title="Nabendu Biswas"
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663518215/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_20.58.39_nrmema.jpg"
              text="Nabendu Biswas is a Founder and teacher of TWD.He have 16 years of IT industry experience and a decade of experience in building professional websites and front-end applications. He have started his career with Government Research lab, then worked in startup and top Investment Bank and last job was in Innominds as Associate Architect."
              designation="Founder TWD,Ex-JP Morgan"
            />
            <Tutor
              title="Shikha Biswas"
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663518213/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_20.58.39_1_vin2ti.jpg"
              text="She is an ESL-certified English trainer and have worked many years in different schools as an English teacher. Her years of experience have led her to understand our broken system of education where students are taught only English grammar and not to speak fluently in English. Keeping all such problems in mind, she found the English Fluency Hub, where people learn to speak fluently in English with accuracy. Many people cracked their interviews after joining this training programme and are working in big MNC's now."
              designation="English Trainer,TWD"
            />
            <Tutor
              title="Hari Prasath"
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663518212/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_20.58.39_2_r9xqtp.jpg"
              text="He enjoy building web apps and also tutor at TWD.He has Worked as a Tutor in PHP-Full stack development for 3 months, His contribution is to provide content for 2 hours daily and also he want to clear the dought for students in the live class."
              designation="JavaScript Trainer,TWD"
            />
            <Tutor
              title="Mousam Mishra"
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663518211/New-blogs/ankit-twd-project/WhatsApp_Image_2022-09-18_at_20.58.39_3_yy8zm7.jpg"
              text="As a professional with strong Web Developments skill, Guiding Planning, Strategic Consulting and Project Management conducting the Physical and remote trainings on the Web developments tools which is required in the current and upcoming future Possess the right business acumen needed to drive change and innovation that will increase Confidence and create sustainable competitive advantage for the organization he work for while fostering long-term mutually beneficial relationships between his team members & Developers."
              designation="CSS Trainer,TWD"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
