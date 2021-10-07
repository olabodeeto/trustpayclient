import React from "react";
import "./Loader.css";
import loading from "../../Assets/loading.gif";

export default function Loader() {
  return (
    <div
      className="flex flex-col h-60 w-10/12 m-auto md:w-4/12 rounded-lg items-center 
    justify-center  relative top-28"
    >
      <div>
        <img src={loading} alt="" />
      </div>
    </div>
  );
}
