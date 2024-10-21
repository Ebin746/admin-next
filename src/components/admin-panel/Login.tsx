"use client";
import { FaGoogle } from "react-icons/fa";
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className="bg-black min-h-screen grid place-items-center">
      <button
        className="bg-white py-4 px-8 flex gap-2 items-center"
        onClick={() => signIn("google",{callbackUrl:"/"})}
      >
        <FaGoogle size={30} />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
