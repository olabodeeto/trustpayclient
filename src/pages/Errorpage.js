import React from "react";
import { Link } from "react-router-dom";
import { Home } from "akar-icons";
import { Bounce } from "react-activity";

export default function Errorpage() {
  return (
    <div className="flex flex-col justify-center items-center bg-purple-700 h-screen">
      <h1 className="text-3xl text-red-300">Opps! Page not found!</h1>
      <div className="mt-10 text-red-100">
        <Link to="/">
          <Home size={24} />
        </Link>
        <Bounce size="20" />
      </div>
    </div>
  );
}
