import React, { useContext } from "react";
import Title from "../../Components/Title";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";

const PaymentDetails = () => {
  const { user } = useContext(AuthContext);
  const instance = UseAxiosSecure();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery(["paymentDetails", 10], async () => {
    return instance
      .get(`/paymentDetails?email=${user?.email}`)
      .then((data) => data);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Title title="Payment History"></Title>
      <div className="overflow-x-auto mt-8 border border-slate-300 rounded-lg dark:border-slate-600">
        <table className="table overflow-x-auto border-collapse text-base ">
          {/* head */}
          <thead className="">
            <tr className="border border-slate-400 text-base dark:border-slate-600">
              <th># </th>
              <th>payment id</th>
              <th>Payment Method</th>
              <th>Class</th>
              <th>Instructor Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, indx) => {
              return (
                <tr
                  key={indx}
                  className="hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-400 rounded-lg dark:border-slate-600"
                >
                  <td>{indx + 1}</td>
                  <td>{el.payment_id}</td>
                  <td>{el.payment_method}</td>
                  <td>{el.class_name}</td>
                  <td>{el.instructor_email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDetails;
