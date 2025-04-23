"use client";
import * as React from "react";
import CloseIcon from "./CloseIcon";
import FormInputs from "./FormInputs";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

function InputDesign() {
  const [appName, setAppName] = React.useState("");
  const [feature, setFeature] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [selectedReaction, setSelectedReaction] = React.useState<'like' | 'dislike' | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("Select Category");

  const [submittedData, setSubmittedData] = React.useState<{
    feature: string;
    comment: string;
    category: string;
    reaction: 'like' | 'dislike' | null;
  } | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const isFormValid = () => {
    return appName.trim() !== '' && 
           feature.trim() !== '' && 
           comment.trim() !== '' && 
           selectedCategory !== 'Select Category' && 
           selectedReaction !== null;
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8FA] py-8">
      <div className="max-w-[1256px] mx-auto">
        <div className="bg-white rounded-xl p-8">
          <div className="bg-[#F8F8FA] rounded-xl p-6 shadow-sm">
            <header className="flex gap-2.5 items-center max-sm:flex-col max-sm:items-start">
              <input
                type="text"
                placeholder="Enter similar app's name here.."
                className="text-base font-bold text-neutral-700 text-opacity-40 bg-transparent border-none outline-none w-full"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
              />
              <CloseIcon />
            </header>
            <hr className="w-full h-px bg-gray-200 border-0 my-4" />
            
            <div className="flex flex-col gap-4">
              {submittedData && (
                <div className="flex gap-4 items-center max-sm:flex-col max-sm:items-start">
                  <div className="px-2.5 py-2 text-sm bg-white rounded-lg border border-gray-200 border-solid h-[42px] text-neutral-800 w-[280px] max-md:w-full max-sm:w-full">
                    {submittedData.feature}
                  </div>
                  <div className="px-2.5 py-2 text-sm bg-white rounded-lg border border-gray-200 border-solid h-[42px] text-neutral-800 w-[280px] max-md:w-full max-sm:w-full">
                    {submittedData.comment}
                  </div>
                  <div className="px-2.5 py-2 text-sm bg-stone-100 rounded-lg border border-gray-200 border-solid">
                    {submittedData.category}
                  </div>
                  <div className="flex gap-4 items-center px-4 py-2.5 rounded-lg border border-gray-200 border-solid bg-stone-100">
                    <div className="flex items-center gap-2">
                      <FiThumbsUp 
                        size={14} 
                        color={submittedData.reaction === 'like' ? '#000000' : '#909090'}
                      />
                      {submittedData.reaction === 'like' && (
                        <span className="text-xs text-neutral-700">I like this feature</span>
                      )}
                    </div>
                    <div className="h-3 w-[0.6px] bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <FiThumbsDown 
                        size={14} 
                        color={submittedData.reaction === 'dislike' ? '#000000' : '#909090'}
                        style={{ opacity: submittedData.reaction === 'dislike' ? 1 : 0.4 }}
                      />
                      {submittedData.reaction === 'dislike' && (
                        <span className="text-xs text-neutral-700">I don't like this feature</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              <FormInputs
                feature={feature}
                comment={comment}
                selectedCategory={selectedCategory}
                selectedReaction={selectedReaction}
                isDropdownOpen={isDropdownOpen}
                onFeatureChange={(e) => setFeature(e.target.value)}
                onCommentChange={(e) => setComment(e.target.value)}
                onDropdownToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                onCategorySelect={handleCategorySelect}
                onReactionSelect={(reaction) => setSelectedReaction(selectedReaction === reaction ? null : reaction)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputDesign;