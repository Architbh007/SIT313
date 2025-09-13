import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm({ onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    //test mode, no real charge
    const { error } = await stripe.createToken(cardElement);

    if (!error) {
      onSuccess(); // redirect to PremiumUnlocked
    } else {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#32325d",
              fontFamily: "Roboto, sans-serif",
              "::placeholder": { color: "#a0aec0" },
            },
            invalid: { color: "#e53e3e" },
          },
        }}
      />

      <button
        type="submit"
        disabled={!stripe}
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#3182ce",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Pay
      </button>
    </form>
  );
}
