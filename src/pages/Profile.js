import { useContext, useEffect, useState } from "react";

import { AuthContext } from "contexts/AuthContext";
import { API } from "config/api";

import Header from "components/molecules/Header";
import ProfileCard from "components/molecules/ProfileCard";
import Footer from "components/molecules/Footer";
import PaymentCard from "components/molecules/PaymentCard";

// import payment from "json/payment.json";

export default function Profile() {
  const { stateAuth } = useContext(AuthContext);

  const [transactions, setTransactions] = useState(null);

  // console.log(transactions);

  const getAllTransaction = async () => {
    const response = await API.get("/transactions");
    const filteredTransactions = response.data.data
      .filter((item) => item.user.id === stateAuth.user.id)
      .filter(
        (item) =>
          item.status === "Waiting Approve" ||
          item.status === "Approve" ||
          item.status === "Cancel"
      );
    setTransactions(filteredTransactions);
  };

  useEffect(() => {
    getAllTransaction();
  }, []);

  return (
    <>
      <Header />
      <main>
        <ProfileCard stateAuth={stateAuth} />
        {transactions?.map((item, index) => (
          <PaymentCard data={item} key={`paymentCard-${index}`} />
        ))}
      </main>
      <Footer />
    </>
  );
}
