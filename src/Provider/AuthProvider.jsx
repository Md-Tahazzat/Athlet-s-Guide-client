import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const gitHubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribed();
  }, []);
  const handleRegister = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const handleSignIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const update = (userDetails) => updateProfile(auth.currentUser, userDetails);
  const handleLogOut = () => signOut(auth);

  const gitHubSignIn = () => signInWithPopup(auth, gitHubProvider);
  const googleSignIn = () => signInWithPopup(auth, googleProvider);
  const userInfo = {
    user,
    loading,
    googleSignIn,
    gitHubSignIn,
    handleRegister,
    handleSignIn,
    handleLogOut,
    update,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
