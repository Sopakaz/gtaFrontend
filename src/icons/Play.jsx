import React from "react";

const Play = ({ width, height, color, ...props }) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 21.75C7.74314 21.7501 7.49082 21.6822 7.26876 21.5531C7.03533 21.425 6.84074 21.2364 6.70545 21.0071C6.57017 20.7778 6.4992 20.5162 6.50001 20.25V3.74997C6.4992 3.48372 6.57017 3.22217 6.70545 2.99285C6.84074 2.76353 7.03533 2.57491 7.26876 2.44684C7.49878 2.31282 7.76121 2.24456 8.02738 2.24952C8.29356 2.25448 8.55326 2.33247 8.77813 2.47497L22.2781 10.7156C22.4994 10.8491 22.6824 11.0375 22.8095 11.2625C22.9365 11.4875 23.0033 11.7416 23.0033 12C23.0033 12.2584 22.9365 12.5124 22.8095 12.7374C22.6824 12.9625 22.4994 13.1509 22.2781 13.2843L8.77813 21.525C8.54554 21.6727 8.27554 21.7508 8.00001 21.75ZM8.00001 3.74997V20.25L21.5 12L8.00001 3.74997Z"
        fill={color}
      />
    </svg>
  );
};

export default Play;
