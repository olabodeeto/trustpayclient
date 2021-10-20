import NotiEndpoints from "./NotiEndpoint";
class Noti {
  async getNewNoti(id) {
    const result = await fetch(NotiEndpoints.NewNoti, {
      method: "POST",
      credentials: "include",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
    const response = await result.json();
    return response;
  }

  async readNoti(id) {
    const result = await fetch(NotiEndpoints.ReadNoti, {
      method: "POST",
      credentials: "include",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
    const response = await result.json();
    return response;
  }

  async updateActionNoti(id) {
    const result = await fetch(NotiEndpoints.UpdateActionNoti, {
      method: "POST",
      credentials: "include",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
    const response = await result.json();
    return response;
  }
}

const noti = new Noti();
export default noti;
