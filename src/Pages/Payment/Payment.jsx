import { Elements } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Payment = ({ paymentDetails, refetch }) => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_KEY);
  const { user } = useContext(AuthContext);
  const instance = UseAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  // TODO: price must be dynamic
  const price = paymentDetails.price;
  useEffect(() => {
    instance
      .post(`/create-payment-intent?email=${user?.email}`, { price })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  if (clientSecret == "") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Elements options={clientSecret} stripe={stripePromise}>
        <CheckoutForm
          refetch={refetch}
          paymentDetails={paymentDetails}
          clientSecret={clientSecret}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
