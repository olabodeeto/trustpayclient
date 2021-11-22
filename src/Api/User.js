import UserEndpoints from "./UserEndpoints";
class User {
  async apicall(data, endpoint, method) {
    try {
      const result = await fetch(endpoint, {
        credentials: "include",
        method: method,
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await result.json();
      return res;
    } catch (error) {
      return error;
    }
  }
  //================ REGISTER API CALL ====================
  async createAccount(data) {
    const result = await this.apicall(data, UserEndpoints.register, "POST");
    return result;
  }
  //======================================================

  //================== LOGIN API CALL ====================
  async loginUser(data) {
    const result = await this.apicall(data, UserEndpoints.login, "POST");
    return result;
  }
  //======================================================

  //================== FORGOT PASSWORD ====================
  async forgotpassword(data) {
    const result = await this.apicall(
      data,
      UserEndpoints.forgotpassword,
      "POST"
    );
    return result;
  }
  //====================================================

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
    const result = await this.apicall(
      data,
      UserEndpoints.verifyAccount,
      "POST"
    );
    return result;
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
    const result = await this.apicall(
      { id: id },
      UserEndpoints.getAccountBalance,
      "POST"
    );
    return result;
  }
  //======================================================

  //================ WITHDRAW API CALL ====================
  async withdraw(data) {
    const result = await this.apicall(data, UserEndpoints.withdraw, "POST");
    return result;
  }
  //======================================================

  //================== IMAGE UPLOAD ====================
  async upload(data) {
    try {
      const result = await fetch(UserEndpoints.upload, {
        method: "POST",
        credentials: "omit",
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
    const result = await this.apicall(data, UserEndpoints.photo, "POST");
    return result;
  }
  //====================================================

  //================ BANK DETAILS UPDATE API CALL ====================
  async bankAccUpdate(data) {
    const result = await this.apicall(
      data,
      UserEndpoints.bankAccUpdate,
      "POST"
    );
    return result;
  }
  //======================================================
}

let user = new User();
export default user;
