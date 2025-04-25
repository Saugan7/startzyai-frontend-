"use client";
import * as React from "react";
import CloseIcon from "./CloseIcon";
import FormInputs from "./FormInputs";
import { ThumbsUpIcon, ThumbsDownIcon } from "./Icons";
import AddComponent from "./AddComponent";

interface CompetitorData {
  appName: string;
  submittedData: Array<{
    feature: string;
    comment: string;
    category: string;
    reaction: 'like' | 'dislike' | null;
  }>;
}

interface FormState {
  currentFeature: string;
  currentComment: string;
  selectedReaction: 'like' | 'dislike' | null;
  selectedCategory: string;
  isDropdownOpen: boolean;
  isDisabled: boolean;  // Add this property
}

function InputDesign() {
  const [competitors, setCompetitors] = React.useState<CompetitorData[]>([{
    appName: "",
    submittedData: []
  }]);

  // Create separate form states for each competitor with proper typing
  const [formStates, setFormStates] = React.useState<FormState[]>([{
    currentFeature: "",
    currentComment: "",
    selectedReaction: null,
    selectedCategory: "Select Category",
    isDropdownOpen: false,
    isDisabled: false  // Initialize the property
  }]);

  const [showAddComponent, setShowAddComponent] = React.useState(false);

  const [showFormInputs, setShowFormInputs] = React.useState<boolean[]>([true]);

  const handleCategorySelect = (competitorIndex: number, category: string) => {
    const updatedFormStates = [...formStates];
    updatedFormStates[competitorIndex].selectedCategory = category;
    updatedFormStates[competitorIndex].isDropdownOpen = false;
    setFormStates(updatedFormStates);
  };

  const isFormValid = (competitorIndex: number) => {
    const formState = formStates[competitorIndex];
    return formState.currentFeature.trim() !== '' && 
           formState.currentComment.trim() !== '' && 
           formState.selectedCategory !== 'Select Category' && 
           formState.selectedReaction !== null;
  };

  const handleSubmit = (competitorIndex: number) => {
    if (isFormValid(competitorIndex)) {
      const formState = formStates[competitorIndex];
      const updatedCompetitors = [...competitors];
      updatedCompetitors[competitorIndex].submittedData.push({
        feature: formState.currentFeature,
        comment: formState.currentComment,
        category: formState.selectedCategory,
        reaction: formState.selectedReaction
      });
      
      setCompetitors(updatedCompetitors);
      setShowAddComponent(true);
      
      // Reset current form with a slight delay to ensure React re-renders properly
      setTimeout(() => {
        const updatedFormStates = [...formStates];
        updatedFormStates[competitorIndex] = {
          currentFeature: "",
          currentComment: "",
          selectedCategory: "Select Category",
          selectedReaction: null,
          isDropdownOpen: false,
          isDisabled: false
        };
        setFormStates(updatedFormStates);
      }, 0);
    }
  };

  const handleRemoveItem = (competitorIndex: number, dataIndex: number) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors[competitorIndex].submittedData.splice(dataIndex, 1);
    setCompetitors(updatedCompetitors);
  };

  const handleAddCompetitor = () => {
    // Add new competitor but don't disable previous ones
    setShowFormInputs([...showFormInputs.map(() => false), true]);
    
    // Add new competitor with enabled form, but don't disable previous ones
    setFormStates([...formStates, {
      currentFeature: "",
      currentComment: "",
      selectedReaction: null,
      selectedCategory: "Select Category",
      isDropdownOpen: false,
      isDisabled: false
    }]);

    setCompetitors([...competitors, {
      appName: "",
      submittedData: []
    }]);
  };

  // Add a new function to enable form inputs for a specific competitor
  const handleCompetitorClick = (competitorIndex: number) => {
    const updatedShowFormInputs = showFormInputs.map((_, index) => index === competitorIndex);
    setShowFormInputs(updatedShowFormInputs);
    
    const updatedFormStates = [...formStates];
    formStates.forEach((state, index) => {
      updatedFormStates[index] = {
        ...state,
        isDisabled: index !== competitorIndex
      };
    });
    setFormStates(updatedFormStates);
  };

  const handleAppNameChange = (competitorIndex: number, value: string) => {
    // Allow changes to any competitor that is currently active
    const updatedCompetitors = [...competitors];
    if (!formStates[competitorIndex].isDisabled) {
      updatedCompetitors[competitorIndex].appName = value;
      setCompetitors(updatedCompetitors);
    }
  };

  const handleRemoveCompetitor = (competitorIndex: number) => {
    if (competitors.length <= 1) return; // Don't remove if it's the last competitor
    
    const updatedCompetitors = [...competitors];
    updatedCompetitors.splice(competitorIndex, 1);
    setCompetitors(updatedCompetitors);

    const updatedFormStates = [...formStates];
    updatedFormStates.splice(competitorIndex, 1);
    setFormStates(updatedFormStates);

    const updatedShowFormInputs = [...showFormInputs];
    updatedShowFormInputs.splice(competitorIndex, 1);
    setShowFormInputs(updatedShowFormInputs);
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8FA] py-8">
      <div className="max-w-[1256px] mx-auto">
        <div className="flex flex-col gap-4">
          {competitors.map((competitor, competitorIndex) => (
            <div 
              key={competitorIndex} 
              className="bg-white rounded-xl p-8 cursor-pointer"
              onClick={() => handleCompetitorClick(competitorIndex)}
            >
              <div className="bg-[#F8F8FA] rounded-xl p-6 shadow-sm">
                <header className="flex gap-2.5 items-center max-sm:flex-col max-sm:items-start">
                  <input
                    type="text"
                    placeholder="Enter similar app's name here.."
                    className="text-base font-bold bg-gradient-to-r from-[#C28B9C] to-[#916498] bg-clip-text text-transparent border-none outline-none w-full placeholder:text-neutral-700 placeholder:text-opacity-40 caret-[#C28B9C] disabled:opacity-60"
                    value={competitor.appName}
                    onChange={(e) => handleAppNameChange(competitorIndex, e.target.value)}
                    disabled={formStates[competitorIndex].isDisabled}
                  />
                  {competitors.length > 1 && (
                    <button 
                      onClick={() => handleRemoveCompetitor(competitorIndex)}
                      className="cursor-pointer"
                      aria-label="Remove competitor"
                    >
                      <CloseIcon />
                    </button>
                  )}
                </header>
                <hr className="w-full h-px bg-gray-200 border-0 my-4" />
                
                <div className="flex flex-col gap-4">
                  {competitor.submittedData.map((data, dataIndex) => (
                    <div key={dataIndex} className="flex gap-4 items-center max-sm:flex-col max-sm:items-start">
                      <div className="px-2.5 py-2 text-sm bg-white rounded-lg border border-gray-200 border-solid h-[42px] text-neutral-800 w-[280px] max-md:w-full max-sm:w-full">
                        {data.feature}
                      </div>
                      <div className="px-2.5 py-2 text-sm bg-white rounded-lg border border-gray-200 border-solid h-[42px] text-neutral-800 w-[280px] max-md:w-full max-sm:w-full">
                        {data.comment}
                      </div>
                      <div className="px-2.5 py-2 text-sm bg-[#F9F2F3] rounded-lg border border-gray-200 border-solid">
                        {data.category}
                      </div>
                      <div className="flex gap-4 items-center px-4 py-2.5 rounded-lg border border-gray-200 border-solid bg-[#F9F2F3]">
                        <div className="flex items-center gap-2">
                          <ThumbsUpIcon isSelected={data.reaction === 'like'} />
                        </div>
                        <div className="h-3 w-[0.6px] bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                          <ThumbsDownIcon isSelected={data.reaction === 'dislike'} />
                        </div>
                      </div>
                      {competitorIndex === competitors.length - 1 && (
                        <button 
                          className="flex items-center px-4 py-2.5 rounded-lg border border-gray-200 border-solid bg-[#F9F2F3] cursor-pointer hover:bg-opacity-90 transition-opacity"
                          onClick={() => handleRemoveItem(competitorIndex, dataIndex)}
                          aria-label="Remove item"
                        >
                          <CloseIcon />
                        </button>
                      )}
                    </div>
                  ))}
                  
                  {/* Only show FormInputs if showFormInputs[competitorIndex] is true */}
                  {showFormInputs[competitorIndex] && (
                    <FormInputs
                      feature={formStates[competitorIndex].currentFeature}
                      comment={formStates[competitorIndex].currentComment}
                      selectedCategory={formStates[competitorIndex].selectedCategory}
                      selectedReaction={formStates[competitorIndex].selectedReaction}
                      isDropdownOpen={formStates[competitorIndex].isDropdownOpen}
                      isDisabled={formStates[competitorIndex].isDisabled}
                      onFeatureChange={(e) => {
                        if (formStates[competitorIndex].isDisabled) return;
                        const updatedFormStates = [...formStates];
                        updatedFormStates[competitorIndex].currentFeature = e.target.value;
                        setFormStates(updatedFormStates);
                      }}
                      onCommentChange={(e) => {
                        if (formStates[competitorIndex].isDisabled) return;
                        const updatedFormStates = [...formStates];
                        updatedFormStates[competitorIndex].currentComment = e.target.value;
                        setFormStates(updatedFormStates);
                      }}
                      onDropdownToggle={() => {
                        if (formStates[competitorIndex].isDisabled) return;
                        const updatedFormStates = [...formStates];
                        updatedFormStates[competitorIndex].isDropdownOpen = !formStates[competitorIndex].isDropdownOpen;
                        setFormStates(updatedFormStates);
                      }}
                      onCategorySelect={(category) => {
                        if (formStates[competitorIndex].isDisabled) return;
                        handleCategorySelect(competitorIndex, category);
                      }}
                      onReactionSelect={(reaction) => {
                        if (formStates[competitorIndex].isDisabled) return;
                        const updatedFormStates = [...formStates];
                        updatedFormStates[competitorIndex].selectedReaction = 
                          formStates[competitorIndex].selectedReaction === reaction ? null : reaction;
                        setFormStates(updatedFormStates);
                      }}
                      onSubmit={() => {
                        if (formStates[competitorIndex].isDisabled) return;
                        handleSubmit(competitorIndex);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {showAddComponent && <AddComponent onClick={handleAddCompetitor} />}
        </div>
      </div>
    </div>
  );
}

export default InputDesign;