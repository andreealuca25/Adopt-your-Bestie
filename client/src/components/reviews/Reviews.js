import React from "react";
import ReviewBadge from "./ReviewBadge";
import { reviews } from "../../utils/reviews";
const Reviews = () => {
  return (
    <div className="px-8">
      {reviews.map((review, index) => (
        <ReviewBadge
          key={index}
          personAndPetDetails={review.personAndPetDetails}
          description={review.description}
          score={review.score}
        />
      ))}
    </div>
  );
};

export default Reviews;
