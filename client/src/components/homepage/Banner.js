import { useState, useEffect } from "react";
import ReviewBadge from "../reviews/ReviewBadge";
import { Link } from "react-router-dom";
import axios from "axios";

const Banner = () => {
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

  const averageReview =
    reviews.length > 0
      ? reviews.reduce((total, reviewData) => total + reviewData.score, 0) /
        reviews.length
      : 0;

  return (
    <div className="bg-white text-center overflow-hidden p-4">
      <div className="flex flex-row justify-center">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
          FIND YOURSELF A TRUE FRIEND
        </h2>
        <img src="images/bird.webp" alt="Bird" className="h-24" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="order-2 md:order-1 p-4 mt-2 md:mt-0 md:mb-0">
          <h3 className="text-md font-semibold text-gray-800 mb-1">
            WHAT WE DO?
          </h3>
          <p className="text-gray-600 mb-4">
            With a focus on matching the right pet with the right family, Adopt
            Your Bestie makes it simple to find and nurture happiness through
            adoption.
          </p>
          <div className="flex justify-center">
            <Link
              to={"/pets"}
              className="bg-purple-600 text-white font-bold mx-1 py-2 px-4 rounded-full hover:bg-purple-700 transition-all duration-300"
            >
              View pets
            </Link>
            <Link
              to={"/leaveAReview"}
              className="bg-purple-600 text-white font-bold mx-1 py-2 px-4 rounded-full hover:bg-purple-700 transition-all duration-300"
            >
              Leave a Review
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-2">
          <img
            src="images/petsTogether.webp"
            alt="Group of Pets"
            className="object-cover object-center rounded-lg"
          />
        </div>
        {reviews.length > 0 && (
          <div className="order-3 md:order-3 flex flex-col items-center mb-2 md:mb-0">
            <div className="flex items-center justify-center mb-1">
              <span className="text-md font-semibold text-gray-800 mr-2">
                {averageReview.toFixed(1)} / 5
              </span>
              <span className="text-sm text-gray-500">
                ({reviews.length} Reviews)
              </span>
            </div>
            <h3 className="text-md font-semibold text-gray-800 mb-1">
              Our happy pet owners
            </h3>
            <div className="overflow-auto max-h-80">
              {reviews.map((review, index) => (
                <ReviewBadge
                  key={index}
                  personAndPetDetails={review.personAndPetDetails}
                  description={review.description}
                  score={review.score}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
