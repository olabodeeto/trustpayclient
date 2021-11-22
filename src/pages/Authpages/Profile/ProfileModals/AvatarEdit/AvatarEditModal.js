import React, { useState } from "react";
import { Sentry } from "react-activity";
import "./AvatarEditModal.css";
import { useSelector, useDispatch } from "react-redux";
import user from "../../../../../Api/User";
import { setUserData } from "../../../../../Store/UserSlice";

export default function AvatarEditModal({ close }) {
  const [closeModal, setcloseModal] = useState("");
  const [profilePhoto, setprofilePhoto] = useState(null);
  const [imageupload, setimageupload] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setimageupload(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleUpload = async () => {
    setisLoading(true);
    const file = profilePhoto[0];
    if (file.type === "image/jpeg" || file.type === "image/png") {
      const data = new FormData();
      data.append("avatar", file);
      const res = await user.upload(data);
      if (res.photo) {
        const bodyData = { photo: res.photo, userid: userData._id };
        const result = await user.photo(bodyData);
        if (result.message) {
          console.log(result.message);
          dispatch(setUserData(result.message));
          setTimeout(() => {
            setisLoading(false);
            setcloseModal("tp-display-hide");
            close(); //to go back to  profile
          }, 1000);
        }
      }
    }
  };

  // useEffect(() => {
  //   setimageupload(URL.createObjectURL(profilePhoto[0]));
  // }, [profilePhoto]);

  return (
    <div className={`tp-modal ${closeModal}`}>
      <div className="bg-purple-700 p-5">
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
                      src={imageupload}
                      alt=""
                      className="object-cover h-full relative rounded-full"
                    />
                  ) : (
                    <input
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e);
                        setprofilePhoto(e.target.files);
                      }}
                      className="mt-16 ml-8 w-24"
                    />
                  )}
                </form>
              </div>
              <div className="tp-modal-bottom">
                <button
                  className="bg-purple-900 text-white py-2 px-5 rounded-lg"
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
