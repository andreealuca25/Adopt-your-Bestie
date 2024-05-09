import React, { useEffect, useState } from "react";
import ReviewBadge from "./ReviewBadge";
import axios from "axios";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      axios
        .get("http://localhost:8080/reviews")
        .then((response) => {
          setReviews(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchReviews();

    return () => {};
  }, []);

  return (
    <div className="px-8">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewBadge
            key={index}
            personAndPetDetails={review.personAndPetDetails}
            description={review.description}
            score={review.score}
          />
        ))
      ) : (
        <div className="col-span-full flex justify-center">
          <p className="text-xl text-center">
            There are no results available at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
