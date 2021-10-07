import React, { useState } from "react";
import { Sentry } from "react-activity";
import "./AvatarEditModal.css";

export default function AvatarEditModal({ close }) {
  const [closeModal, setcloseModal] = useState("");
  const [profilePhoto, setprofilePhoto] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setprofilePhoto(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleUpload = () => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      setcloseModal("tp-display-hide");
      close(); //to go back to  profile
    }, 1000);
  };
  console.log(profilePhoto);
  return (
    <div className={`tp-modal ${closeModal}`}>
      <div className="bg-purple-400 p-5">
        <div className="tp-modal-head">
          <label
            className="tp-modal-btn"
            onClick={() => {
              setcloseModal("tp-display-hide");
              close(); //to go back to  profile
            }}
          ></label>
        </div>
        <div className="tp-modal-content">
          {isLoading ? (
            <center>
              <Sentry size="40" />
            </center>
          ) : (
            <div>
              <div className="flex justify-center items-center w-40 h-40 rounded-full m-auto border-2 border-red-500">
                <form className="relative w-full h-full rounded-full">
                  {profilePhoto ? (
                    <img
                      src={profilePhoto}
                      alt=""
                      className="object-cover h-full relative rounded-full"
                    />
                  ) : (
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="mt-16 ml-8 w-24"
                    />
                  )}
                </form>
              </div>
              <div className="tp-modal-bottom">
                <button
                  className="bg-purple-800 text-white py-2 px-5 rounded-lg"
                  onClick={handleUpload}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
