import React, { useEffect } from "react";
import { useHistory } from "react-router";
import check from "../Assets/checkk.gif";

export default function SignupSuccess({ formSuccess, url }) {
  const history = useHistory();
  useEffect(() => {
    // return <Redirect to="/login" />;
    setTimeout(() => {
      history.push(url);
    }, 2500);
  });
  return (
    <div
      className="flex-col absolute m-auto w-full top-0 left-0 right-0 bottom-0 min-h-full bg-black bg-opacity-60 flex 
               justify-center items-center z-40"
    >
      <div className="w-48 h-48 flex justify-center items-center rounded-full p-4 bg-white">
        <img src={check} alt="" className="w-32" />
      </div>
    </div>
  );
}
