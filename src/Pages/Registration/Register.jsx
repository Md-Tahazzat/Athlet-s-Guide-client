import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import lottieUser from "../../assets/LottieJson/userLogin.json";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "react-lottie-player";

const Register = () => {
  const { update, googleSignIn, gitHubSignIn, handleRegister } =
    useContext(AuthContext);
  const [creatingUser, setCreatingUser] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
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
    setCreatingUser(true);
    const { confirmPassword, email, image, name, password } = data;
    setErrorMsg("");
    if (password !== confirmPassword) {
      setErrorMsg("Password didn't match");
      return;
    }
    handleRegister(email, password)
      .then((user) => {
        console.log(user);
        if (user) {
          const userDetails = {
            displayName: name,
            photoURL: image,
          };
          update(userDetails).then((result) => {
            console.log(result);
            setCreatingUser(false);
            reset();
            navigate(from, { replace: true });
          });
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  // social login method
  const handleGoogleSigin = () => {
    setErrorMsg("");
    googleSing()
      .then((result) => {
        if (result?.user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => setErrorMsg(err.message));
  };
  const handleGithubSignin = () => {
    setErrorMsg("");
    gitHubSign()
      .then((result) => {
        if (result?.user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => setErrorMsg(err.message));
  };

  return (
    <div className="w-full px-4 md:px-auto relative mt-2 md:mt-0 md:min-h-screen">
      <div className="hidden md:block">
        <Lottie loop={false} play animationData={lottieUser} />;
      </div>
      {creatingUser ? (
        <div className="md:absolute mt-36 bg-slate-300/80 dark:bg-slate-700/70 rounded-lg py-20 gap-2 top-5 left-0 right-0 w-full mx-auto md:max-w-[30rem] flex flex-col items-center">
          <span className="text-2xl mr-6">Creating...</span>
          <div className="w-10 h-10 mr-8 rounded-full animate-spin border-dotted border-blue-500 border-8"></div>
        </div>
      ) : (
        <form
          className="md:absolute top-5 left-0 right-0 border md:min-w-[28rem] mx-auto md:max-w-[32rem] p-4 w-full md:py-5 md:px-20 bg-slate-300/90 dark:bg-slate-700/90 border-slate-300 dark:border-slate-600 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center text-2xl font-semibold ">
            Please Register !!
          </h1>
          <div className="w-full">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              required
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 rounded-md border dark:border-slate-500 border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
            />
          </div>

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

          <div className="w-full">
            <label className="label" htmlFor="confirmPassword">
              Photo URl:
            </label>
            <input
              type="text"
              {...register("image", { required: true })}
              placeholder="Enter photo URL"
              className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 w-full rounded-md border dark:border-slate-500 border-slate-400 focus:outline-none focus:border-slate-400 max-w-sm"
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
              placeholder="Password"
              className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 w-full rounded-md border dark:border-slate-500 border-slate-400 focus:outline-none focus:border-slate-400 max-w-sm"
            />
            <label className="label">
              {errorMsg && <span className="text-red-500">{errorMsg}</span>}
            </label>
            <a
              onClick={() => setHidePassword(!hidePassword)}
              href="#"
              className="absolute right-3 bottom-7"
            >
              {hidePassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </a>
          </div>

          <div className="w-full relative">
            <label className="label" htmlFor="password">
              Confirm-Password:
            </label>
            <input
              type={hidePassword ? "password" : "text"}
              required
              {...register("confirmPassword", { required: true })}
              placeholder="Confirm password"
              className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 w-full rounded-md border dark:border-slate-500 border-slate-400 focus:outline-none focus:border-slate-400 max-w-sm"
            />
            <label className="label">
              {errorMsg && <span className="text-red-500">{errorMsg}</span>}
            </label>
            <a
              onClick={() => setHidePassword(!hidePassword)}
              href="#"
              className="absolute right-3 bottom-7"
            >
              {hidePassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </a>
          </div>

          <p className="text-sm">
            Already have an account?
            <Link
              state={{ from: from }}
              className="text-blue-600 dark:text-blue-400 ml-1"
              to="/login"
            >
              Login
            </Link>
          </p>

          <input
            className="w-full mt-4 py-2 max-w-md  bg-blue-600 rounded-md text-white text-xl hover:bg-blue-700"
            type="submit"
            value="Register"
          />
        </form>
      )}

      <div className="divider max-w-[32rem] w-full mx-auto">or</div>
      <p className="my-1 text-center">Sign in with </p>

      <div className="my-4 max-w-[32rem] w-full mx-auto flex items-center justify-center gap-1">
        <button
          onClick={handleGoogleSigin}
          className="flex items-center p-1 rounded-md bg-[#685d79] hover:bg-[#544b61] duration-200 text-xl text-white justify-center border border-slate-300"
        >
          <FaGoogle className="w-10 h-10 p-1" />{" "}
          <span className="px-2">Google</span>
        </button>
        <button
          onClick={handleGithubSignin}
          className="flex items-center p-1 rounded-md bg-[#685d79] hover:bg-[#544b61] duration-200 text-xl text-white justify-center border border-slate-300"
        >
          <FaGithub className="w-10 h-10 p-1" />{" "}
          <span className="px-2">GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
