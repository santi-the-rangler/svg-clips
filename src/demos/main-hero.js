import React from "react";
import "./main-hero.css";

const MainHero = () => {
  return (
    <div className="main-hero">
      <h2>Main Hero....</h2>
      <div className="main-hero-content">
        <div className="text-container">
          <MainHeroText />
        </div>
        <div className="image-container">
          <MainHeroBackgroundImage
            className="desktop"
            width="1001"
            height="615"
          />
          <MainHeroBackgroundImage
            className="tablet"
            width="499"
            height="510"
          />
          <MainHeroBackgroundImage
            className="mobile"
            width="330"
            height="340"
          />
        </div>
      </div>
    </div>
  );
};

const MainHeroText = (props) => {
  return (
    <div>
      <h2>Live by design, not by default</h2>
      <p>
        We help guide our partners through an everychanging digital environment
        and teach them how to thrive through transformation. Read more
      </p>
      <button class="mediacard button-red">Read More</button>
    </div>
  );
};

const MainHeroBackgroundImage = (props) => {
  return (
    <div className={"imgWithBg " + props.className}>
      <svg
        className="redBg bgClipPathMH"
        viewBox={"0 0 " + props.width + " " + props.height}
        preserveAspectRatio="xMidYMid slice"
      >
        <rect fill="#CF4326" />
      </svg>
      <img
        className="imgClipPathMH"
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
        preserveAspectRatio="xMidYMid slice"
      />
    </div>
  );
};

export default MainHero;
