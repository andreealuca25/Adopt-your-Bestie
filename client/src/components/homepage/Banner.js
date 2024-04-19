import React from "react";
import { reviews } from "../../utils/reviews";
import ReviewBadge from "../reviews/ReviewBadge";
import { Link } from "react-router-dom";

const Banner = () => {
  const averageReview =
    reviews.reduce((total, reviewData) => total + reviewData.score, 0) /
    reviews.length;

  return (
    <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden p-10">
      <div className="flex flex-row justify-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-5">
          FIND YOURSELF A TRUE FRIEND
        </h2>
        <img src="images/bird.webp" alt="Bird" className="h-28" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="order-2 md:order-1 p-6 mt-4 md:mt-0 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            WHAT WE DO?
          </h3>
          <p className="text-gray-600 mb-6">
            With a focus on matching the right pet with the right family, Adopt
            Your Bestie makes it simple to find and nurture happiness through
            adoption.
          </p>
          <Link
            to={"/pets"}
            className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300"
          >
            View pets
          </Link>
        </div>
        <div className="order-1 md:order-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-5">
          <img
            src="images/petsTogether.webp"
            alt="Group of Pets"
            className="object-cover object-center rounded-lg"
          />
        </div>
        <div className="order-3 md:order-3 flex flex-col items-center mb-4 md:mb-0">
          <div className="flex items-center justify-center mb-2">
            <span className="text-lg font-semibold text-gray-800 mr-2">
              {averageReview.toFixed(1)} / 5
            </span>
            <span className="text-sm text-gray-500">
              ({reviews.length} Reviews)
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our happy pet owners
          </h3>
          <div>
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
      </div>
    </div>
  );
};

export default Banner;
