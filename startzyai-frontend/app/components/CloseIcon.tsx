import React from "react";

const CloseIcon: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon-close"
      style={{ width: "24px", height: "24px", opacity: 0.5 }}
    >
      <g opacity="0.5">
        <path
          d="M18 6L6 18"
          stroke="#909090"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6 6L18 18"
          stroke="#909090"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default CloseIcon;
