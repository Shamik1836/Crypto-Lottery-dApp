import React from "react";
import { useMetamask } from "@thirdweb-dev/react";
function Login() {
  const connectWithMetamask = useMetamask();
  return (
    <div className="bg-[#091B18] min-h-screen flex text-center flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-56 w-56 mb-10"
          src="https://i.imgur.com/4h7mAu7.png"
          alt=""
        />
        <h1 className="text-6xl text-white font-bold">THE PAPAFAM DRAW</h1>
        <h2 className="text-white">
          Get Started By logging in with your Metamask
        </h2>
        <button
          onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with Metamask
        </button>
      </div>
    </div>
  );
}

export default Login;
