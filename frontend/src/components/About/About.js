import React from "react";
import "./About.css";
// import ImageScroller from "./ImageScroller";
import DesignedCarousel from "../DesignedCarousel/DesignedCarousel";
import DemoImg from "./Images/1.jpg";

export default function About() {
  return (
    <div style={{ background: "rgb(244, 249, 255)" }}>
      <h1 className="AboutHead">Jspm's Alumni Cell</h1>
      <p className="AboutHeadText">
        Jspm University Alumni Association shall serve as a platform to bridge
        the gap of student - alumni interaction driven by the ideals and values
        that shall ensure the upliftment of both present and future alumnus with
        support to build a social, knowledgeable and motivational capital for
        Jspm University and its students.
      </p>
      <div className="VisionOut">
        <h2>VISION</h2>
        <p>
          “To satisfy the aspirations of youth force, who wants to lead nation
          towards prosperity through techno-economic development.”
        </p>
      </div>
      <div className="VisionOut">
        <h2>MISSION</h2>
        <p>
          “To provide, nurture and maintain an environment of high academics
          excellence, research and entrepreneurship for all aspiring students,
          which will prepare them to face global challenges maintaining high
          ethical and moral standards.”
        </p>
      </div>
      {/* <ImageScroller /> */}
      <DesignedCarousel />
      <h1 className="AwardsHead">Awards and Achievements</h1>
      <div className="AwardsOut">
        <div className="AwardsCard">
          <img src={DemoImg} />
          <p>
            Award for an Engineering College having Best Overall Performance
          </p>
        </div>
        <div className="AwardsCard">
          <img src={DemoImg} />
          <p>
            Award for an Engineering College having Best Overall Performance
          </p>
        </div>
        <div className="AwardsCard">
          <img src={DemoImg} />
          <p>
            Award for an Engineering College having Best Overall Performance
          </p>
        </div>
        <div className="AwardsCard">
          <img src={DemoImg} />
          <p>
            Award for an Engineering College having Best Overall Performance
          </p>
        </div>
      </div>
    </div>
  );
}
