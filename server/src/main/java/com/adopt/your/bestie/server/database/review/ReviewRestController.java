package com.adopt.your.bestie.server.database.review;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewRestController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("")
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/{id}")
    public Review getReviewById(@PathVariable ObjectId id) {
        return reviewService.getReviewById(id);
    }

    @PostMapping("/add")
    public Review createReview(@RequestBody Review review) {
        return reviewService.createReview(review);
    }

    @PutMapping("/{id}")
    public Review updateReview(@PathVariable ObjectId id, @RequestBody Review review) {
        return reviewService.updateReview(id, review);
    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable ObjectId id) {
        reviewService.deleteReview(id);
    }
}
