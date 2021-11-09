import { useContext, useEffect, useState } from "react";

import Header from "components/molecules/Header";
import PaymentCard from "components/molecules/PaymentCard";
import Footer from "components/molecules/Footer";
import { ModalPopUp } from "components/atoms";

import { API } from "config/api";
import { AuthContext } from "contexts/AuthContext";

export default function Payment() {
  const [isShow, setIsShow] = useState(false);
  const { stateAuth } = useContext(AuthContext);
  const [transaction, setTransaction] = useState(null);

  const handleClose = () => {
    setIsShow(false);
  };

  const getLastTransaction = async () => {
    try {
      const response = await API.get("/transactions");
      const filteredTransactions = response.data.data.filter(
        (item) => item.user.id === stateAuth.user.id
      );
      setTransaction(filteredTransactions[filteredTransactions.length - 1]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(transaction);

  const handlePay = async () => {
    if (!transaction.attachment) {
      return alert("Please upload the payment proof first");
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.set(
      "attachment",
      transaction.attachment[0],
      transaction.attachment[0].name
    );

    const response = await API.put(
      `/transactions/pay/${transaction.id}`,
      formData,
      config
    );
    setTransaction(response.data.data);
    setIsShow(true);
  };

  useEffect(() => {
    getLastTransaction();
  }, []);

  return (
    <>
      <Header />
      <main>
        {transaction === null ? (
          <div className="container">
            <div className="d-flex justify-content-center align-items-center fs-4 vh-100">
              Loading...
            </div>
          </div>
        ) : (
          <>
            <PaymentCard data={transaction} setData={setTransaction} />
            {transaction.status === "Waiting Payment" && (
              <div className="container">
                <div className="d-flex justify-content-end">
                  <button
                    className={`btn btn-primary mt-2 fw-bold text-white ${
                      transaction.status === "Waiting Approve" && "d-none"
                    }`}
                    style={{ width: 213, height: 50 }}
                    onClick={handlePay}
                  >
                    PAY
                  </button>
                </div>
              </div>
            )}
            <ModalPopUp isShow={isShow} handleClose={handleClose} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
