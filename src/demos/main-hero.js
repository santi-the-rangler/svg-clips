import React from "react";
import "./main-hero.css";

const MainHero = () => {
  return (
    <div className="main-hero">
      <h2>Main Hero....</h2>
      <div className="main-hero-content">
        <div className="text-container">
          <h2>Live by design, not by default</h2>
          <p>
            We help guide our partners through an everychanging digital
            environment and teach them how to thrive through transformation.
            Read more
          </p>
        </div>
        <div className="image-container">
          <svg
            width="1001"
            height="615"
            viewBox="0 0 1001 615"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M986.965 14.9844H610.183L10.4844 615L387.267 614.999L986.965 14.9844ZM1001.5 615V59L455.5 615H1001.5Z"
              fill="#CF4326"
            />
            <clipPath id="imageClipPath">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M980.975 0.000476496L601.696 0L0.5 601.514H379.778L980.975 0.000476496ZM989 602V49.5L445.5 602H989Z"
                fill="#CF4326"
              />
            </clipPath>

            <image
              href="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
              clipPath="url(#imageClipPath)"
              width="1001"
              height="615"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
