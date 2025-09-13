import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51S6XomKxoduFGvwG4q8fuLRKWP3j6JGzuuqjZnFFHT1wCejQarrb5jaNjkEYfnvleEfqvoPNzl1BzmojkWrDAWFm00XbOTicon");

export default function Payment() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Payment Page</h1>
      <p>Complete your payment for Premium Plan</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm onSuccess={() => navigate("/premium")} />
      </Elements>
    </div>
  );
}
