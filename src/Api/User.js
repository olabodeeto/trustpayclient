import UserEndpoints from "./UserEndpoints";
class User {
  //================ REGISTER API CALL ====================
  async createAccount(data) {
    const result = await fetch(UserEndpoints.register, {
      credentials: "include",
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await result.json();
    return res;
  }
  //======================================================

  //================== LOGIN API CALL ====================
  async loginUser(data) {
    try {
      const result = await fetch(UserEndpoints.login, {
        credentials: "include",
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await result.json();
      return res;
    } catch (e) {
      return e;
    }
  }
  //======================================================

  //==================== CHECK AUTH API CALL==============
  async checkLogin() {
    try {
      const result = await fetch(UserEndpoints.checklogin, {
        credentials: "include",
        method: "POST",
        headers: { "content-Type": "application/json" },
      });
      const res = await result.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  //======================================================

  //====================VERIFIY ACCOUNT =================

  async verifyAccount(data) {
    try {
      const result = await fetch(UserEndpoints.verifyAccount, {
        credentials: "include",
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await result.json();
      return res;
    } catch (e) {
      return e;
    }
  }

  //=======================================================

  //===================== LOGOUT API CALL=================
  async userLogout() {
    const result = await fetch(UserEndpoints.logout, {
      credentials: "include",
      method: "POST",
      headers: { "content-Type": "application/json" },
    });
    const res = await result.json();
    return res;
  }
  //======================================================

  //================== ACCOUNT BALANCE API CALL ====================
  async balance(id) {
    try {
      const result = await fetch(UserEndpoints.getAccountBalance, {
        credentials: "include",
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      });
      const res = await result.json();
      return res;
    } catch (e) {
      return e;
    }
  }
  //======================================================

  //================== IMAGE UPLOAD ====================
  async upload(data) {
    try {
      const result = await fetch(UserEndpoints.upload, {
        method: "POST",
        body: data,
      });
      const res = await result.json();
      return res;
    } catch (e) {
      return e;
    }
  }
  //====================================================

  //================== IMAGE UPDATE ====================
  async photo(data) {
    try {
      const result = await fetch(UserEndpoints.photo, {
        credentials: "include",
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await result.json();
      return res;
    } catch (e) {
      return e;
    }
  }
  //====================================================
}

let user = new User();
export default user;
