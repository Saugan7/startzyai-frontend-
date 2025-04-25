import React from "react";

interface IconProps {
  isSelected?: boolean;
}

export const ThumbsUpIcon: React.FC<IconProps> = ({ isSelected = false }) => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-thumbs-up"
        style={{ width: "14px", height: "15px", opacity: isSelected ? 1 : 0.4 }}
      >
        <path
          d="M4.14323 7.375L6.47656 1.75C6.94069 1.75 7.38581 1.94754 7.714 2.29917C8.04219 2.65081 8.22656 3.12772 8.22656 3.625V6.125H11.5282C11.6973 6.12295 11.8648 6.16031 12.0191 6.23451C12.1734 6.30871 12.3108 6.41796 12.4218 6.5547C12.5328 6.69143 12.6147 6.85239 12.6618 7.02641C12.709 7.20043 12.7203 7.38335 12.6949 7.5625L11.8899 13.1875C11.8477 13.4856 11.7064 13.7573 11.492 13.9525C11.2776 14.1478 11.0046 14.2534 10.7232 14.25H4.14323M4.14323 7.375V14.25M4.14323 7.375H2.39323C2.08381 7.375 1.78706 7.5067 1.56827 7.74112C1.34948 7.97554 1.22656 8.29348 1.22656 8.625V13C1.22656 13.3315 1.34948 13.6495 1.56827 13.8839C1.78706 14.1183 2.08381 14.25 2.39323 14.25H4.14323"
          stroke={isSelected ? "#22C55E" : "#909090"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      {isSelected && (
        <span className="text-xs text-green-600">I like this feature</span>
      )}
    </div>
  );
};

export const ThumbsDownIcon: React.FC<IconProps> = ({ isSelected = false }) => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-thumbs-down"
        style={{ width: "14px", height: "15px", opacity: isSelected ? 1 : 0.4 }}
      >
        <path
          d="M9.97503 8.62523L7.6417 14.2502C7.17757 14.2502 6.73245 14.0527 6.40426 13.7011C6.07607 13.3494 5.8917 12.8725 5.8917 12.3752V9.87523H2.59003C2.42092 9.87728 2.25341 9.83991 2.09912 9.76571C1.94482 9.69152 1.80743 9.58227 1.69645 9.44553C1.58547 9.30879 1.50357 9.14784 1.45642 8.97382C1.40927 8.7998 1.39799 8.61688 1.42337 8.43773L2.22837 2.81273C2.27056 2.51466 2.41186 2.24297 2.62626 2.04772C2.84065 1.85247 3.11368 1.74682 3.39503 1.75023H9.97503M9.97503 8.62523V1.75023M9.97503 8.62523H11.5325C11.8627 8.63148 12.1835 8.50764 12.434 8.27721C12.6846 8.04679 12.8474 7.72581 12.8917 7.37523V3.00023C12.8474 2.64964 12.6846 2.32866 12.434 2.09824C12.1835 1.86781 11.8627 1.74397 11.5325 1.75023H9.97503"
          stroke={isSelected ? "#EF4444" : "#909090"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      {isSelected && (
        <span className="text-xs text-red-600">I don't like this feature</span>
      )}
    </div>
  );
};