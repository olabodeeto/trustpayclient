import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import user from "../../Api/User";

export default function Pay() {
  const [message, setmessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    user.checkLogin().then((res) => {
      if (res.message !== false) {
        setmessage("Pay now");
      } else {
        setmessage("Login to pay");
      }
    });
  }, []);
  return (
    <div className="bg-red-600 h-screen md:p-4">
      <div className="p-2 bg-gray-600">
        <h2
          className="
        text-4xl text-red-400 bg-blue-500"
        >
          Please, login to continue
        </h2>
      </div>
    </div>
  );
}
