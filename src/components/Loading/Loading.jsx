import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="background-popup">
      <div className="loading-popup">
        Loading
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <linearGradient id="a6">
            <stop offset="0" stop-color="#FFFFFF" stop-opacity="0"></stop>
            <stop offset="1" stop-color="#FFFFFF"></stop>
          </linearGradient>
          <circle
            fill="none"
            stroke="url(#a6)"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
            cx="100"
            cy="100"
            r="70"
            transform-origin="center"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="discrete"
              dur="2"
              values="360;324;288;252;216;180;144;108;72;36"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
        </svg>
      </div>
    </div>
  );
}

export default Loading;
