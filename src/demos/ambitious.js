import React from "react";
import "./ambitious.css";

const Ambitious = () => {
  return (
    <div>
      <div className="container">
        <video className="isClipped" src="traffic2.mp4" autoPlay muted loop />
        <video className="isClipped" src="office.mp4" autoPlay muted loop />
        <svg width="0" height="0">
          <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.523438 0.890625 L 0.496094 0.941406 Z M 0.976562 0.0429688 L 0.949219 0.09375 Z M 0.523438 0.890625 L 0.949219 0.09375 Z M 0.976562 0.0429688 L 0.976562 0.941406 L 0.496094 0.941406 Z M 0.269531 0.441406 C 0.3125 0.441406 0.339844 0.390625 0.339844 0.3125 C 0.339844 0.234375 0.3125 0.183594 0.269531 0.183594 L 0.113281 0.183594 L 0.113281 0.441406 Z M 0.113281 0.941406 L 0.0234375 0.941406 L 0.0234375 0.0429688 L 0.269531 0.0429688 C 0.367188 0.0429688 0.429688 0.152344 0.429688 0.3125 C 0.429688 0.472656 0.367188 0.582031 0.269531 0.582031 L 0.25 0.582031 L 0.441406 0.941406 L 0.320312 0.941406 L 0.132812 0.582031 L 0.113281 0.582031 Z M 0.113281 0.941406 " />
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default Ambitious;
