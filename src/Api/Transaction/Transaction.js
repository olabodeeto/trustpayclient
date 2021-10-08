class Transaction {
  getPayLink = async (id) => {
    let res = await fetch(
      "http://localhost:5000/api/transaction/paymentlink/details",
      {
        method: "POST",
        credentials: "include",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      }
    );
    let data = await res.json();
    return data;
  };
}

let transaction = new Transaction();
export default transaction;
