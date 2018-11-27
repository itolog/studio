import React from "react";

import "./YouVideo.scss";

const YouVideo = props => {
  return (
    <div className="you-video">
      <span className="you-video--load">LOADING...</span>
      <div className="you-video--content">
        <iframe
          className="you-video--iframe"
          width="100%"
          height="100%"
          data-src={props.url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={props.title}
        />
        <span className="you-video--info">{props.title}</span>
      </div>
    </div>
  );
};

export default YouVideo;
