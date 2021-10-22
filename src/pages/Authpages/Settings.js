import React from "react";
import Header from "./components/Header";

export default function Settings() {
  return (
    <>
      <Header />
      <div className="bg-indigo-100 h-screen">
        <div
          className="relative w-11/12 md:w-8/12 m-auto border-2 top-10  
        mt-5 py-10 md:px-20 md:mt-14"
        >
          <div className="rounded-lg bg-white p-4">
            <h1 className="text-center text-2xl">Settings</h1>
            <div className="mt-20">
              <h2>Profile</h2>
              <hr />
              <div className="mt-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
