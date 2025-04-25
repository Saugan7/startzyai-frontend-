"use client";
import * as React from "react";

/**
 * InputDesign component that displays an "Add competitor" button-like element
 * with a dashed border and centered text
 */
function AddComponent({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="flex flex-col gap-4 justify-center items-center p-6 w-full rounded-lg border border-dashed border-[#C28B9C] h-[54px] max-md:p-5 max-sm:p-4 max-sm:rounded-lg bg-[#F9F2F3] hover:bg-opacity-90 transition-opacity"
      aria-label="Add competitor"
      onClick={onClick}
    >
      <span className="w-full text-lg font-semibold leading-6 text-center text-[#C28B9C] max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">
        + Add competitor
      </span>
    </button>
  );
}

export default AddComponent;
