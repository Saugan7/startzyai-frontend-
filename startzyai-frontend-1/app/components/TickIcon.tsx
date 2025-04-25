import React from "react";

const TickIcon: React.FC = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon-tick"
      style={{ width: "16px", height: "16px", opacity: 0.5 }}
    >
      <g opacity="0.5">
        <path
          d="M20 6L9 17L4 12"
          stroke="#909090"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default TickIcon;