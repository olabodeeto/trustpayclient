import React from "react";
import { useSelector } from "react-redux";
import "./Avatar.css";
import profilephoto from "../../../../Assets/profilephoto.jpg";

export default function Avatar({ type }) {
  const userData = useSelector((state) => state.user.userData);
  return (
    <div className="w-28 h-28 items-center rounded-full mb-8">
      <img
        className={type ? type : "object-cover h-full relative rounded-full"}
        src={
          userData.photo
            ? `${process.env.REACT_APP_IMAGE_URL}/${userData.photo}`
            : profilephoto
        }
        alt="profile"
      />
    </div>
  );
}
