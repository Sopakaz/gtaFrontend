import React from "react";

const ArrowRight = ({ width, height, color, ...props }) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.125 21.5937C16.875 21.3437 16.755 21.0417 16.765 20.6875C16.7758 20.3333 16.9062 20.0312 17.1562 19.7812L20.6875 16.25H6.75C6.39583 16.25 6.09875 16.13 5.85875 15.89C5.61958 15.6508 5.5 15.3542 5.5 15C5.5 14.6458 5.61958 14.3487 5.85875 14.1087C6.09875 13.8696 6.39583 13.75 6.75 13.75H20.6875L17.125 10.1875C16.875 9.9375 16.75 9.64042 16.75 9.29625C16.75 8.95292 16.875 8.65625 17.125 8.40625C17.375 8.15625 17.6721 8.03125 18.0162 8.03125C18.3596 8.03125 18.6562 8.15625 18.9062 8.40625L24.625 14.125C24.75 14.25 24.8387 14.3854 24.8912 14.5312C24.9429 14.6771 24.9688 14.8333 24.9688 15C24.9688 15.1667 24.9429 15.3229 24.8912 15.4688C24.8387 15.6146 24.75 15.75 24.625 15.875L18.875 21.625C18.6458 21.8542 18.3596 21.9688 18.0162 21.9688C17.6721 21.9688 17.375 21.8437 17.125 21.5937Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRight;
