import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const CheckoutForm = ({ clientSecret, paymentDetails, refetch }) => {
  const instance = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    Swal.fire({
      title: "processing...",
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, paymentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      }
    );
    if (paymentError) {
      Swal.close();
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Invalid Card",
      });
      cardError(paymentError);
    }
    if (paymentIntent?.status === "succeeded") {
      const currentDate = new Date();
      const date = currentDate.getMonth() + currentDate.getDate();
      const newPayment = {
        date,
        user: user.email,
        payment_method: paymentIntent.payment_method,
        payment_id: paymentIntent.id,
        class_name: paymentDetails.class_name,
        instructor: paymentDetails.instructor,
        instructor_email: paymentDetails.instructor_email,
      };
      instance.post("/payments", newPayment).then((data) => {
        Swal.close();
        Swal.fire({
          icon: "success",
          title: "success",
          text: "successfully added",
        });
        refetch();
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          id="cardElement"
          className="border-slate-400 dark:border-slate-500  py-2 px-2 rounded-lg text-slate-800 border max-w-3xl"
          options={{
            style: {
              base: {
                color: "#8d8d8d",
                "::placeholder": {
                  color: "#8392a0",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm  btn-primary mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <P className="mt-10 text-red-500 text-xl">cardError</P>}
    </>
  );
};

export default CheckoutForm;
