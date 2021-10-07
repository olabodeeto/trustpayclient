import React from "react";
import "./Avatar.css";
import profilephoto from "../../../../Assets/profilephoto.jpg";

export default function Avatar({ type }) {
  return (
    <img
      className={type ? type : "tp-profile-avatar"}
      src={profilephoto}
      alt="profile"
    />
  );
}
