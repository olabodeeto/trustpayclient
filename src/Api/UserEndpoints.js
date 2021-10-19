const UserEndpoints = {
  register: `${process.env.REACT_APP_BASE_URL}/user/signup`,
  login: `${process.env.REACT_APP_BASE_URL}/user/login`,
  logout: `${process.env.REACT_APP_BASE_URL}/user/logout`,
  checklogin: `${process.env.REACT_APP_BASE_URL}/user/user`,
  verifyAccount: `${process.env.REACT_APP_BASE_URL}/user/verifyuser`,
};

export default UserEndpoints;
