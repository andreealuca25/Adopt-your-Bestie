package com.adopt.your.bestie.server.controller;

import com.adopt.your.bestie.server.service.PaymentService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {

     @Autowired
    private PaymentService paymentService;

    @PostMapping("/create")
    public Map<String, String> createPaymentIntent(@RequestBody Map<String, Object> data) throws Exception {
        int amount = (int) data.get("amount");

        PaymentIntent intent = paymentService.createPaymentIntent(amount);

        Map<String, String> responseData = new HashMap<>();
        responseData.put("clientSecret", intent.getClientSecret());

        return responseData;
    }
}
