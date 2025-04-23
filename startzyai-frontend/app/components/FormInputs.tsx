import React from 'react';
import { ThumbsUpIcon, ThumbsDownIcon } from "./Icons";
import TickIcon from './TickIcon';

interface FormInputsProps {
  feature: string;
  comment: string;
  selectedCategory: string;
  selectedReaction: 'like' | 'dislike' | null;    
  isDropdownOpen: boolean;
  onFeatureChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCommentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDropdownToggle: () => void;
  onCategorySelect: (category: string) => void;
  onReactionSelect: (reaction: 'like' | 'dislike') => void;
}

function FormInputs({
  feature,
  comment,
  selectedCategory,
  selectedReaction,
  isDropdownOpen,
  onFeatureChange,
  onCommentChange,
  onDropdownToggle,
  onCategorySelect,
  onReactionSelect
}: FormInputsProps) {
  const categories = ["Problem", "Opportunity", "Challenge"];

  return (
    <div className="flex gap-4 items-center max-sm:flex-col max-sm:items-start">
      <input
        type="text"
        placeholder="Enter more feature here.."
        className="px-2.5 py-2 text-sm bg-white rounded-lg border border-gray-200 border-solid h-[42px] text-neutral-800 text-opacity-40 w-[280px] max-md:w-full max-sm:w-full"
        value={feature}
        onChange={onFeatureChange}
      />
      <input
        type="text"
        placeholder="Add your comments"
        className="px-2.5 py-2 text-sm bg-white rounded-lg border border-gray-200 border-solid h-[42px] text-neutral-800 text-opacity-40 w-[280px] max-md:w-full max-sm:w-full"
        value={comment}
        onChange={onCommentChange}
      />
      <div className="relative">
        <button 
          className="flex gap-2 items-center p-2.5 rounded-lg border border-gray-200 border-solid bg-stone-100 max-md:w-full max-sm:w-full"
          onClick={onDropdownToggle}
        >
          <span className="text-xs text-neutral-700 text-opacity-40">
            {selectedCategory}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`icon-dropdown transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            style={{ width: "16px", height: "16px" }}
          >
            <path
              d="M2.05859 5L8.05859 11L14.0586 5"
              stroke="#909090"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg border border-gray-200 shadow-lg z-10">
            {categories.map((category) => (
              <button
                key={category}
                className="w-full text-left px-4 py-2 text-xs text-neutral-700 hover:bg-stone-100 transition-colors"
                onClick={() => onCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-4 items-center px-4 py-2.5 rounded-lg border border-gray-200 border-solid bg-stone-100 max-md:w-full max-sm:w-full">
        <button
          className="flex gap-1 items-center"
          aria-label="Like"
          onClick={() => onReactionSelect('like')}
        >
          <ThumbsUpIcon isSelected={selectedReaction === 'like'} />
        </button>
        <div className="h-3 w-[0.6px] bg-gray-300"></div>
        <button
          className="flex gap-1 items-center"
          aria-label="Dislike"
          onClick={() => onReactionSelect('dislike')}
        >
          <ThumbsDownIcon isSelected={selectedReaction === 'dislike'} />
        </button>
      </div>
      <div className="flex items-center px-4 py-2.5 rounded-lg border border-gray-200 border-solid bg-stone-100">
        <TickIcon />
      </div>
    </div>
  );
}

export default FormInputs;