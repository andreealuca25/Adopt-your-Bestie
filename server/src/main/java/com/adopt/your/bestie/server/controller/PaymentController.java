package com.adopt.your.bestie.server.controller;

import com.adopt.your.bestie.server.PaymentService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/create")
    public PaymentIntent createPaymentIntent(@RequestParam Long amount, @RequestParam String currency) {
        try {
            return paymentService.createPaymentIntent(amount, currency);
        } catch (StripeException e) {
            // Handle exception (log it, rethrow it, etc.)
            e.printStackTrace();
            return null;
        }
    }
}
