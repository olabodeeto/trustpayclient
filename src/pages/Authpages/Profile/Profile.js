import React, { useEffect } from "react";
import "./Profile.css";
// import ProfileHeader from "./ProfileHeader/ProfileHeader";
// import AvatarEditModal from "./ProfileModals/AvatarEdit/AvatarEditModal";
import Profileinfo from "./ProfileInfo/Profileinfo";
import Header from "../components/Header";

export default function Profile() {
  // const [showAvatarEdit, setshowAvatarEdit] = useState(false);
  // const handleShowAvatarEdit = () => {
  //   setshowAvatarEdit(true);
  // };

  // const handleClose = () => {
  //   setshowAvatarEdit(!showAvatarEdit);
  // };

  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <Header />
      <div className="bg-indigo-100 min-h-screen pb-10">
        <div className="pt-24">
          <div className="tp-user-profile">
            {/* {showAvatarEdit ? (
              <AvatarEditModal close={handleClose} />
            ) : (
              <ProfileHeader showEdit={handleShowAvatarEdit} />
            )} */}
            <Profileinfo />
          </div>
        </div>
      </div>
    </>
  );
}
