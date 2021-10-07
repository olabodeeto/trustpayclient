import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import user from "../../Api/User";
import { setPaymentLink } from "../../Store/PaymentlinkSlice";

export default function Pay() {
  const [message, setmessage] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // const paylink = useSelector((state) => state.paylink.payLink);
  // console.log(paylink);

  const gotoLogin = () => {
    dispatch(setPaymentLink(id));
    history.push("/login");
  };

  useEffect(() => {
    user.checkLogin().then((res) => {
      if (res.message !== false) {
        setmessage("Pay now");
      } else {
        setmessage("Please, login to continue");
      }
    });
  }, []);
  return (
    <div
      className="bg-indigo-100 h-screen md:p-4 
    flex justify-center items-center flex-col"
    >
      <div
        className="mt-20 py-2 px-10 bg-purple-600 rounded-lg
        text-gray-50 cursor-pointer"
        onClick={gotoLogin}
      >
        <h2>{message}</h2>
      </div>

      <div className="mt-40 text-gray-400">
        <p>Trustpayme | Secured way to pay online</p>
      </div>
    </div>
  );
}
