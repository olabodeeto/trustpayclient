const UserEndpoints = {
  register: `${process.env.REACT_APP_BASE_URL}/user/signup`,
  login: `${process.env.REACT_APP_BASE_URL}/user/login`,
  logout: `${process.env.REACT_APP_BASE_URL}/user/logout`,
  checklogin: `${process.env.REACT_APP_BASE_URL}/user/user`,
  verifyAccount: `${process.env.REACT_APP_BASE_URL}/user/verifyuser`,
  getAccountBalance: `${process.env.REACT_APP_BASE_URL}/user/balance`,
  cashout: `${process.env.REACT_APP_BASE_URL}/user/cashout`,
  upload: `${process.env.REACT_APP_BASE_URL}/user/upload`,
  photo: `${process.env.REACT_APP_BASE_URL}/user/photo`,
  forgotpassword: `${process.env.REACT_APP_BASE_URL}/user/forgotpassword`,
  bankAccUpdate: `${process.env.REACT_APP_BASE_URL}/user/bankAccUpdate`,
  withdraw: `${process.env.REACT_APP_BASE_URL}/user/withdraw`,
};

export default UserEndpoints;
