import React from "react";
import "./ProfileHeader.css";
import { Edit } from "akar-icons";
import Avatar from "../Avatar/Avatar";

export default function ProfileHeader({ showEdit }) {
  return (
    <div className="tp-profile-header bg-purple-700">
      <div className="tp-profile-avatar-container">
        <div className="w-28 h-28 items-center rounded-full mb-8">
          <Avatar type="avatar" />
        </div>

        <Edit
          size={24}
          className="tp-profile-avatar-edit"
          onClick={() => {
            showEdit();
          }}
        />
      </div>
    </div>
  );
}
