// src/auth/login.ts
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebase.js";

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (err) {
    console.error("Google login error", err);
    return null;
  }
};

export const githubLogin = async () => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (err:any) {
    if (err.code === "auth/account-exists-with-different-credential") {
      alert("Account already exists. Please login using Google.");
      return null; // 🔥 important
    }
    console.error("GitHub login error:", err);
    return null;
  }
};
