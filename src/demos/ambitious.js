import React from "react";
import "./ambitious.css";

const Ambitious = () => {
  return (
    <div>
      <div className="multiPathContainer">
        <h2>multiple paths</h2>
        <video className="multiPath" src="traffic2.mp4" autoPlay muted loop />
        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="multiPath">
            <path d="M57.079 134.212L134.213 213.52H199.005L118.786 134.212C162.289 132.992 191.292 106.76 191.292 67.1061C191.292 27.4525 161.981 0 115.701 0H0V213.52H49.3656V134.212H57.079ZM49.3656 94.5587V41.1788H115.701C129.585 41.1788 141.926 48.8045 141.926 67.7162C141.926 86.933 129.585 94.5587 115.701 94.5587H49.3656Z" />
            <path
              d="M268.9 99.1341C270.442 90.2883 277.847 83.8827 295.742 83.8827C318.265 83.8827 323.819 93.0335 323.819 108.285V109.81L274.762 114.385C237.737 117.741 213.055 134.212 213.055 164.715C213.055 199.793 239.28 218.095 271.676 218.095C299.444 218.095 314.563 208.944 323.819 196.743V213.52H370.716V108.285C370.716 65.581 336.469 50.3296 295.742 50.3296C254.09 50.3296 226.322 67.7162 220.768 99.1341H268.9ZM282.475 184.542C267.974 184.542 259.952 176.916 259.952 164.715C259.952 154.039 265.506 146.413 280.007 144.888L323.819 140.313V144.888C323.819 170.816 305.924 184.542 282.475 184.542Z"
              stroke="#CF4326"
            />
            <path
              d="M456.44 54.905H409.542V213.52H456.44V129.637C456.44 103.71 471.558 88.4581 494.081 88.4581C515.061 88.4581 524.009 100.659 524.009 120.486V213.52H570.906V117.436C570.906 74.7319 545.606 50.3296 504.88 50.3296C483.899 50.3296 467.238 57.9553 456.44 71.6816V54.905Z"
              stroke="#CF4326"
            />
            <path
              d="M647.658 129.637C647.658 100.659 665.553 85.4078 684.991 85.4078C706.589 85.4078 723.867 102.184 723.867 129.637C723.867 157.089 706.589 173.866 684.991 173.866C665.553 173.866 647.658 158.615 647.658 129.637ZM722.324 193.693C722.324 225.721 704.737 239.447 686.534 239.447C677.586 239.447 664.319 237.922 659.383 224.196H611.56C617.73 254.698 647.35 273 686.534 273C731.888 273 769.221 244.022 769.221 193.693V54.905H722.324V70.1564C716.153 62.5307 701.652 50.3296 675.735 50.3296C630.689 50.3296 600.761 85.4078 600.761 129.637C600.761 173.866 630.997 208.944 675.735 208.944C701.652 208.944 716.462 196.743 722.324 189.117V193.693Z"
              stroke="#CF4326"
            />
            <path
              d="M809.559 213.52H856.456V0H809.559V213.52Z"
              stroke="#CF4326"
            />
            <path
              d="M1001.31 166.24C999.155 175.391 989.282 184.542 973.855 184.542C952.566 184.542 938.065 169.291 936.523 149.464H1055V141.838C1055 128.417 1053.46 114.996 1049.76 103.404C1039.57 71.6816 1013.04 50.3296 972.313 50.3296C920.787 50.3296 888.083 86.933 888.083 134.212C888.083 181.492 920.787 218.095 973.855 218.095C1016.12 218.095 1042.66 195.218 1051.91 166.24H1001.31ZM972.313 83.8827C992.059 83.8827 1005.02 96.0838 1006.56 117.436H936.523C939.608 96.0838 952.566 83.8827 972.313 83.8827Z"
              stroke="#CF4326"
            />
          </clipPath>
        </svg>
      </div>
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
