import React from "react";

const Visa = ({ width, height, color, ...props }) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 288 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_139_63)">
        <path
          d="M142.603 1.64677L123.357 91.6056H100.086L119.335 1.64677H142.603ZM240.511 59.7328L252.763 25.9514L259.813 59.7328H240.511ZM266.475 91.6056H288L269.217 1.64677H249.347C244.884 1.64677 241.116 4.24464 239.441 8.2473L204.528 91.6056H228.963L233.816 78.1722H263.672L266.475 91.6056ZM205.741 62.2348C205.84 38.4905 172.904 37.1832 173.133 26.5765C173.201 23.3473 176.277 19.9176 183.001 19.0389C186.341 18.6036 195.524 18.2686 205.951 23.0661L210.033 3.9905C204.435 1.9561 197.227 0.000900726 188.265 0.000900726C165.265 0.000900726 149.073 12.2306 148.937 29.741C148.792 42.691 160.493 49.9145 169.313 54.2217C178.377 58.6317 181.424 61.4556 181.385 65.3989C181.325 71.4384 174.152 74.0984 167.461 74.2041C155.759 74.3889 148.969 71.0452 143.556 68.5233L139.339 88.2332C144.776 90.7322 154.811 92.9014 165.223 93.0134C189.667 93.0134 205.661 80.9337 205.741 62.2348ZM109.349 1.64677L71.6459 91.6056H47.0427L28.4901 19.8113C27.3636 15.3889 26.3833 13.7717 22.9563 11.9093C17.3693 8.8749 8.12969 6.0265 0 4.26036L0.556771 1.64677H40.1527C45.1984 1.64677 49.7391 5.00557 50.8844 10.8176L60.6844 62.878L84.9011 1.64677H109.349"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_139_63">
          <rect width="288" height="93.0133" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Visa;
