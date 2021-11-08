import { useEffect, useState } from "react";

import Header from "components/molecules/Header";
import ListTransaction from "components/molecules/ListTransaction";
import Footer from "components/molecules/Footer";

import { API } from "config/api";
// import listTransaction from "json/listTransaction.json";

export default function Transaction() {
  const [transactions, setTransactions] = useState(null);

  const getAllTransaction = async () => {
    const response = await API.get("/transactions");
    setTransactions(response.data.data);
  };

  useEffect(() => {
    getAllTransaction();
  }, []);

  return (
    <>
      <Header />
      <main>
        <ListTransaction data={transactions} />
      </main>
      <Footer />
    </>
  );
}
