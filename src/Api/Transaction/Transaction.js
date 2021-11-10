import TransactionEndpoints from "../TransactionEndpoints";
class Transaction {
  getPayLink = async (id) => {
    let res = await fetch(TransactionEndpoints.linkDetails, {
      method: "POST",
      credentials: "include",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
    let data = await res.json();
    return data;
  };

  createLink = async (userdata) => {
    try {
      let res = await fetch(TransactionEndpoints.paymentLink, {
        method: "POST",
        credentials: "include",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(userdata),
      });
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  updateLink = async (id) => {
    let res = await fetch(TransactionEndpoints.updateLink, {
      method: "POST",
      credentials: "include",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
    let data = await res.json();
    return data;
  };

  userTransactions = async (id, email) => {
    let res = await fetch(TransactionEndpoints.userTransactions, {
      method: "POST",
      credentials: "include",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: id, email: email }),
    });
    let data = await res.json();
    return data;
  };

  userLinks = async (email) => {
    let res = await fetch(TransactionEndpoints.userLinks, {
      method: "POST",
      credentials: "include",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });
    let data = await res.json();
    return data;
  };

  /*================ FETCH BANKS ======================*/
  bankList = async () => {
    let res = await fetch("api.paystack.co/bank", {
      method: "GET",
      port: 443,
      credentials: "include",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_KEY}`,
      },
    });
    let data = await res;
    return data;
  };
}

let transaction = new Transaction();
export default transaction;
