import React from "react";
import "./main-hero.css";

const MainHero = () => {
  return (
    <div>
      <div className="main-hero">
        <h2>Main Hero....</h2>
        <svg
          width="1001"
          height="615"
          viewBox="0 0 1001 615"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M980.975 0.000476496L601.696 0L0.5 601.514H379.778L980.975 0.000476496ZM989 602V49.5L445.5 602H989Z"
            fill="#CF4326"
          />
          <clipPath id="imageClipPath">
            <path
              d="M986.965 14.9844H610.183L10.4844 615L387.267 614.999L986.965 14.9844ZM1001.5 615V59L455.5 615H1001.5Z"
              fill="#CF4326"
            />
          </clipPath>
          <image
            href="https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg"
            clipPath="url(#imageClipPath)"
            width="1001"
            height="615"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </div>
  );
};

export default MainHero;
