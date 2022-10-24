import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../Reusable/Buttons";
import Input from "../Reusable/Input";
import Spinner from "../Reusable/Spinner";

export default function Form({ paymentIntent, service }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    //Grab the client secret from url params
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          toast("Successfully paid!");

          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleAmount = async (val) => {
    fetch("api/stripe_intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: val,
        payment_intent_id: paymentIntent,
      }),
    });
  };

  useEffect(() => {
    if (service.price) {
      handleAmount(service.price);
    }
  }, [service.price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("not loaded");
      // Stripe.js has not yet loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/services/" + service.id,
        receipt_email: email,
        shipping: {
          address: { city: "NY" },
          name: "Shipping user",
        },
        payment_method_data: {
          billing_details: {
            name: "Billing user",
          },
        },
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit} className="m-auto">
        <Input label="Price" disabled value={service?.price} readonly required />

        <Input
          label="Email"
          type={email}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PaymentElement id="payment-element" />
        <Button disabled={isLoading || !stripe || !elements || !email} id="submit">
          <span id="button-text">{isLoading ? <Spinner /> : "Pay now"}</span>
        </Button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
}
