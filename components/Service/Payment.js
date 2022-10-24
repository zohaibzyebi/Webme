import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Payment({service}) {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");

  
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads using our local API
    fetch("/api/stripe_intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 30000,
        payment_intent_id: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setClientSecret(data.client_secret), setPaymentIntent(data.id);
      });
  }, []);

  const appearance = {
    theme: "stripe",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <h1 className="text-2xl bold mb-4 mt-4 text-center">Buy Now</h1>
      
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <CheckoutForm paymentIntent={paymentIntent} service={service} />
        </Elements>
      )}
    </div>
  );
}
