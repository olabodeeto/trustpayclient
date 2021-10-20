const NotiEndpoints = {
  NewNoti: `${process.env.REACT_APP_BASE_URL}/notification/user`,
  ReadNoti: `${process.env.REACT_APP_BASE_URL}/notification/read`,
  UpdateActionNoti: `${process.env.REACT_APP_BASE_URL}/notification/updateAction`,
};

export default NotiEndpoints;
