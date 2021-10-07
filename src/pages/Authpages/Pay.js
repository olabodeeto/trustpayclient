import React from "react";
import Header from "./components/Header";

export default function Pay() {
  return (
    <>
      <Header />
      <div className="bg-indigo-100 min-h-screen pb-10">
        <div
          className="relative w-full lg:w-10/12 xl:w-9/12 m-auto top-10  
        mt-5 py-10 md:px-20 md:mt-14"
        >
          <h2>Payment link opened</h2>
        </div>
      </div>
    </>
  );
}
