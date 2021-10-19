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
}

let user = new User();
export default user;
