package com.adopt.your.bestie.server.database.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review getReviewById(Long id) {
        return reviewRepository.findById(id).orElse(null);
    }

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review updateReview(Long id, Review review) {
        Review existingReview = reviewRepository.findById(id).orElse(null);
        if (existingReview != null) {
            existingReview.setPersonAndPetDetails(review.getPersonAndPetDetails());
            existingReview.setDescription(review.getDescription());
            existingReview.setScore(review.getScore());
            return reviewRepository.save(existingReview);
        } else {
            return null;
        }
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}
