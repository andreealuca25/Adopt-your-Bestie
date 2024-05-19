package com.adopt.your.bestie.server.configuration;

import com.stripe.Stripe;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;


@Configuration
public class StripeConfig {

    @PostConstruct
    public void init() {
        Stripe.apiKey = "private_key";
    }
}
