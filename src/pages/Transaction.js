import { useEffect, useState } from "react";

import Header from "components/molecules/Header";
import ListTransaction from "components/molecules/ListTransaction";
import Footer from "components/molecules/Footer";

import { API } from "config/api";

import NotFoundIcon from "assets/icons/not-found.svg";

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
                <h1 className="fw-bold h5">No Transaction Yet</h1>
              </div>
            </div>
          </div>
        ) : (
          <ListTransaction data={transactions} />
        )}
      </main>
      <Footer />
    </>
  );
}
