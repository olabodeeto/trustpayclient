const TransactionEndpoints = {
  linkDetails: `${process.env.REACT_APP_BASE_URL}/transaction/paymentlink/details`,
  updateLink: `${process.env.REACT_APP_BASE_URL}/transaction/paymentlink/update`,
  userTransactions: `${process.env.REACT_APP_BASE_URL}/transaction/paymentlink/usertransactions`,
  userLinks: `${process.env.REACT_APP_BASE_URL}/transaction/paymentlink/userlinks`,
  paymentLink: `${process.env.REACT_APP_BASE_URL}/transaction/paymentlink`,
};

export default TransactionEndpoints;
