import React from "react";

import "./Video.scss";
import YouVideo from "../YouVideo/YouVideo";

const Video = () => {
  return (
    <section className="section video-section" id="#video">
      <div className="slide slide-section--item" data-anchor="slide1">
        <div className="video-section--content">
          <YouVideo
            url="https://www.youtube.com/embed/aJWqnpJVFiM"
            title="React Native"
          />
          <a className="video-section--upp" href="#values">
            вверх
          </a>
        </div>
      </div>
      <div className="slide slide-section--item" data-anchor="slide2">
        <div className="video-section--content">
          <YouVideo
            url="https://www.youtube.com/embed/oBkcozjgtuA"
            title="Rock`n scroll"
          />
          <a className="video-section--upp" href="#values">
            вверх
          </a>
        </div>
      </div>
    </section>
  );
};

export default Video;
