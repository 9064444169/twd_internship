import React from "react";
import "./About.css";
import Card from "./Card";

const About = () => {
  return (
    <div className="about">
      <div className="home">
        <div className="home__container">
          <h2 className="home__head">Why learn with us?</h2>
          <div className="home__row">
            <Card
              heading="World-Class Mentors"
              title="Get taught by industry experts having years of experience in their respective fields apart from having cracked various top tech companies worldwide."
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663431834/New-blogs/ankit-twd-project/learn1_elvvsi.svg"
            />
            <Card
              heading="Large Student Community"
              title="Join a network of thousands of students from across the globe to support our motive of Learn, Connect, and Grow!"
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663431832/New-blogs/ankit-twd-project/learn2_f7vvcs.svg"
            />
            <Card
              heading="Top-Notch LIVE Lectures"
              title="Join our three-month-long series of LIVE lectures with top mentors, recorded sessions, and teaching assistants."
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663431829/New-blogs/ankit-twd-project/learn3_kr7qkk.svg"
            />
            <Card
              heading="One-on-One Mentorship"
              title="Students will have mentors who will help them with their doubts, provide guidance, and help them out 24x7."
              image="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1663431825/New-blogs/ankit-twd-project/learn4_ddi01l.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
