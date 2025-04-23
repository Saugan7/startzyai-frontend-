interface DisplayDataProps {
  appName: string;
  feature: string;
  comment: string;
  category: string;
  reaction: 'like' | 'dislike' | null;
}

const DisplayData: React.FC<DisplayDataProps> = ({ appName, feature, comment, category, reaction }) => {
  if (!appName && !feature && !comment) return null;
  
  return (
    <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200 w-full">
      <h2 className="text-lg font-semibold mb-4">Submitted Data</h2>
      <div className="space-y-3">
        <div className="flex gap-2">
          <span className="font-medium">App Name:</span>
          <span>{appName}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium">Feature:</span>
          <span>{feature}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium">Comment:</span>
          <span>{comment}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium">Category:</span>
          <span>{category}</span>
        </div>
        {reaction && (
          <div className="flex gap-2">
            <span className="font-medium">Reaction:</span>
            <span>{reaction}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayData;