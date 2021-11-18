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
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${process.env.REACT_APP_PAYSTACK_KEY}`
    );
    // var formdata = new FormData();
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      // body: formdata,
      redirect: "follow",
    };
    try {
      let response = await fetch(
        "https://api.paystack.co/bank",
        requestOptions
      );
      let data = await response.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*================  BANK ACCOUNT VERIFICATION ======================*/
  verifyBankAccount = async (data) => {
    const { accountNumber, bankCode, accountName } = data;
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${process.env.REACT_APP_PAYSTACK_SKEY}`
    );
    myHeaders.append("Content-Type", "application/json");

    const accountData = {
      type: "nuban",
      name: accountName,
      description: "trustpay",
      account_number: accountNumber,
      bank_code: bankCode,
      currency: "NGN",
    };

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(accountData),
      redirect: "follow",
    };

    const response = await fetch(
      "https://api.paystack.co/transferrecipient",
      requestOptions
    );
    const result = await response.text();
    console.log(data);
    return result;
  };
}

let transaction = new Transaction();
export default transaction;
