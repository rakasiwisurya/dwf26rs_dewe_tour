import { useContext, useEffect, useState } from "react";

import { AuthContext } from "contexts/AuthContext";
import { API } from "config/api";

import Header from "components/molecules/Header";
import ProfileCard from "components/molecules/ProfileCard";
import Footer from "components/molecules/Footer";
import PaymentCard from "components/molecules/PaymentCard";

import NotFoundIcon from "assets/icons/not-found.svg";

export default function Profile() {
  const { stateAuth } = useContext(AuthContext);

  const [transactions, setTransactions] = useState(null);

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
        <div className="payment-card container pt-5">
          {!transactions?.length ? (
            <div className="container">
              <div className="not-found d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <img
                    src={NotFoundIcon}
                    alt="Not Found"
                    width="250"
                    height="250"
                  />
                  <h1 className="fw-bold h5">No History Trip Yet</h1>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h2 className="fw-bold mb-5 ms-3">History Trip</h2>
              {transactions?.map((item, index) => (
                <PaymentCard data={item} key={`paymentCard-${index}`} />
              ))}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
