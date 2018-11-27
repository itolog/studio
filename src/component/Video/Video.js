import React from "react";
import "./Video.scss";

const Video = () => {
  return (
    <section className="section video-section" id="#video">
      <div className="slide slide-section--item" data-anchor="slide1">
        <span className="slide-section--load">LOADING...</span>
        <iframe
          className="slide-section--iframe"
          width="100%"
          height="85%"
          data-src="https://www.youtube.com/embed/aJWqnpJVFiM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="React Native"
        />
        <span className="slide-section--info">RN</span>
      </div>
      <div className="slide slide-section--item" data-anchor="slide2">
        <span className="slide-section--load">LOADING...</span>
        <iframe
          className="slide-section--iframe"
          width="100%"
          height="80%"
          data-src="https://www.youtube.com/embed/oBkcozjgtuA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Rock`n scroll"
        />
        <span className="slide-section--info">Rock`n scroll</span>
      </div>
    </section>
  );
};

export default Video;
