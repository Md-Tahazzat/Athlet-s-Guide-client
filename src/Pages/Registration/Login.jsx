import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import lottieUser from "../../assets/LottieJson/userLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "react-lottie-player";
import UpdateTitle from "../../Hooks/UpdateTitle";

const Login = () => {
  const { googleSignIn, gitHubSignIn, handleSignIn } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [signiningUser, setSigniningUser] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setErrorMsg("");
    setSigniningUser(true);
    handleSignIn(data.email, data.password)
      .then((user) => {
        if (user) {
          reset();
          setSigniningUser(false);
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        setSigniningUser(false);
        setErrorMsg(err.message);
      });
  };

  // social login method
  const handleGoogleSigin = () => {
    setErrorMsg("");
    googleSignIn()
      .then((result) => {
        if (result?.user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => setErrorMsg(error.message));
  };
  // const handleGithubSignin = () => {
  //   setErrorMsg("");
  //   gitHubSignIn()
  //     .then((result) => {
  //       // if (result?.user) {
  //       //   navigate(from, { replace: true });
  //       // }
  //     })
  //     .catch((error) => setErrorMsg(err.message));
  // };

  return (
    <div className="w-full px-4 md:px-auto relative mt-2 md:mt-0">
      <UpdateTitle title="Login"></UpdateTitle>;
      <div className="hidden md:block">
        <Lottie
          className="h-[400px]"
          loop={false}
          play
          animationData={lottieUser}
        />
        ;
      </div>
      <form
        className="md:absolute top-10 left-0 right-0 border md:min-w-[28rem] mx-auto md:max-w-[32rem] p-4 w-full md:py-5 md:px-20 bg-slate-300/90 dark:bg-slate-700/90 border-slate-300 dark:border-slate-600 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl font-semibold ">Please Login !!</h1>
        <div className="w-full">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            required
            {...register("email", { required: true })}
            placeholder="Enter your email"
            className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 rounded-md border dark:border-slate-500 border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
        </div>

        <div className="w-full relative">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            type={hidePassword ? "password" : "text"}
            required
            {...register("password", { required: true })}
            placeholder="Enter your password"
            className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 w-full rounded-md border dark:border-slate-500 border-slate-400 focus:outline-none focus:border-slate-400 max-w-sm"
          />

          <a
            onClick={() => setHidePassword(!hidePassword)}
            href="#"
            className="absolute right-3 bottom-3"
          >
            {hidePassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </a>
        </div>
        <div>
          <label className="label">
            {errorMsg && <span className="text-red-500">{errorMsg}</span>}
          </label>
        </div>

        <p className="text-sm">
          Don't have an account?
          <Link
            state={{ from: from }}
            className="text-blue-600 dark:text-blue-400 ml-1"
            to="/register"
          >
            Register
          </Link>
        </p>

        {signiningUser ? (
          <div className="w-full mt-4 py-2 max-w-md text-center bg-blue-600 rounded-md text-white text-xl hover:bg-blue-700">
            <p className="rounded-full inline-block w-5 h-5 animate-spin border-dotted border-slate-100 border-4"></p>
          </div>
        ) : (
          <input
            className="w-full mt-4 py-2 max-w-md  bg-blue-600 rounded-md text-white text-xl hover:bg-blue-700"
            type="submit"
            value="Login"
          />
        )}
      </form>
      <p className="text-center">Sign in With</p>
      <div className="my-4 max-w-[32rem] w-full mx-auto flex items-center justify-center gap-4">
        <button
          onClick={handleGoogleSigin}
          className="flex items-center rounded-md bg-slate-500/70 shadow-lg dark:bg-slate-600/70 hover:bg-slate-400/90 dark:hover:bg-slate-600/95 duration-200 text-xl text-white justify-center border border-slate-400 dark:border-slate-600"
        >
          <FaGoogle className="w-10 h-10 p-1" />{" "}
          <span className="px-2">Google</span>
        </button>
        {/* <button
          onClick={handleGithubSignin}
          className="flex items-center rounded-md bg-slate-500/70 shadow-lg dark:bg-slate-600/70 hover:bg-slate-400/90 dark:hover:bg-slate-600/95 duration-200 text-xl text-white justify-center border border-slate-400 dark:border-slate-600"
        >
          <FaGithub className="w-10 h-10 p-1" />
          <span className="px-2">GitHub</span>
        </button> */}
      </div>
    </div>
  );
};

export default Login;
