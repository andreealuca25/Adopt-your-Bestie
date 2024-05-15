import { useEffect, useState } from "react";
import ReviewBadge from "./ReviewBadge";
import axios from "axios";
import { Link } from "react-router-dom";
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
    <div className="flex flex-col items-center">
      <Link
        to={"/leaveAReview"}
        className="bg-purple-600 text-white font-bold mx-1 my-4 py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300"
      >
        Leave a Review
      </Link>
      <div className="grid px-8 grid-cols-4 grid-flow-col gap-4">
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
    </div>
  );
};

export default Reviews;
