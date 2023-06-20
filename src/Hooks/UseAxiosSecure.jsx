import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogOut } = useContext(AuthContext);

  const instance = axios.create({
    baseURL: "http://localhost:5000",
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error("Request interceptor error:", error);
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => response?.data,
    async (error) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        await handleLogOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default UseAxiosSecure;
