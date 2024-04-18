import React from "react";

const ReviewBadge = ({
  personAndPetDetails = "",
  description = "",
  score = 5,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-3 mb-3 shadow-md hover:border-purple-500">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-xs font-semibold text-gray-800">
          {personAndPetDetails}
        </h2>
        <div className="flex items-center">
          <span className="text-xs font-semibold text-yellow-500 mr-1">
            {score}
          </span>
          <img className="h-3 w-3" src="/images/starReview.png" alt="stars" />
        </div>
      </div>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};

export default ReviewBadge;
