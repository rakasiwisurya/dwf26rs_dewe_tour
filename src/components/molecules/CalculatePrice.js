import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ModalLogin, ModalRegister } from "components/atoms";

import { API } from "config/api";
import formatNumber from "utils/formatNumber";

import { NotificationManager } from "react-notifications";

export default function CalculatePrice({ tripId, price, quota, stateAuth }) {
  const history = useHistory();

  const [show, setShow] = useState({
    login: false,
    register: false,
  });

  const [transaction, setTransaction] = useState({
    counterQty: 1,
    total: price,
    tripId: tripId,
    userId: stateAuth.user.id,
  });

  const [quotaRemaining, setQuotaRemaining] = useState({
    quota: quota - transaction.counterQty,
  });

  const [dataTransaction, setDataTransaction] = useState([]);

  const getDataTransactionsByUserId = async () => {
    const response = await API.get("/transactions");
    const filteredTransactions = response.data.data.filter(
      (item) => item.user.id === stateAuth.user.id
    );
    setDataTransaction(filteredTransactions[filteredTransactions.length - 1]);
  };

  useEffect(() => {
    getDataTransactionsByUserId();
  }, []);

  let totalPrice = transaction.counterQty * price;

  const handleClose = () => {
    setShow({ login: false, register: false });
  };

  const handleShowLogin = () => {
    setShow((prevState) => ({ ...prevState, login: true }));
  };

  const handleSwitch = () => {
    if (show.login) {
      setShow({ login: false, register: true });
    } else {
      setShow({ login: true, register: false });
    }
  };

  const handleAdd = () => {
    if (transaction.counterQty < quota) {
      const add = transaction.counterQty + 1;
      const updateQuota = quota - add;
      setQuotaRemaining({ quota: updateQuota });
      setTransaction((prevState) => ({
        ...prevState,
        counterQty: add,
        total: totalPrice,
      }));
    }
  };

  const handleSubtract = () => {
    if (transaction.counterQty > 1) {
      const subtract = transaction.counterQty - 1;
      const updateQuota = quota - subtract;
      setQuotaRemaining({ quota: updateQuota });
      setTransaction((prevState) => ({
        ...prevState,
        counterQty: subtract,
        total: totalPrice,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      if (stateAuth.isLogin) {
        const detailTripData = await API.get(`/trips/${tripId}`);
        const quotaTrip = detailTripData.data.data.quota;

        let resultQuota = quotaTrip - transaction.counterQty;

        if (resultQuota <= 0) {
          NotificationManager.error(
            `I'm Sorry, this quota tour was updated, quota is ${quotaTrip} now, someone book this tour before`,
            "Limited Quota Tour"
          );

          const pushToHome = setTimeout(() => {
            history.push("/");
          }, 3000);

          return pushToHome;
        }

        if (dataTransaction?.status === "Waiting Payment") {
          return NotificationManager.warning(
            "Please pay your last transaction first before make a new transaction",
            "Warning",
            5000,
            () => {
              history.push("/payment");
            }
          );
        }

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const bodyTransaction = JSON.stringify(transaction);
        const response = await API.post(
          "/transactions",
          bodyTransaction,
          config
        );

        const bodyQuota = JSON.stringify(quotaRemaining);
        await API.put(`/trips/${tripId}`, bodyQuota, config);
        response.data.status === "success" &&
          NotificationManager.success(response.data.message, "Success");

        history.push("/payment");
      } else {
        handleShowLogin();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="detail-calculate mb-5">
      <div className="container">
        <div className="d-flex justify-content-between fw-bold fs-5">
          <div className="price d-flex align-items-center">
            IDR.
            <span className="mx-2 text-primary">{formatNumber(price)}</span>/
            Person
          </div>
          <div className="quantity">
            <button
              className="btn btn-primary text-white rounded-circle fw-bold"
              onClick={handleSubtract}
            >
              -
            </button>
            <div className="d-inline-block text-center" style={{ width: 75 }}>
              {transaction.counterQty}
            </div>
            <button
              className="btn btn-primary text-white rounded-circle fw-bold"
              onClick={handleAdd}
            >
              +
            </button>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold">
          <div className="fs-5">Total :</div>
          <div className="text-primary fs-5">
            IDR. {formatNumber(totalPrice)}
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary mt-2 fw-bold text-white d-flex align-items-center justify-content-center"
            style={{ width: 213, height: 50 }}
          >
            BOOK NOW
          </button>
        </div>
      </div>

      <ModalLogin
        show={show.login}
        handleClose={handleClose}
        handleSwitch={handleSwitch}
      />

      <ModalRegister
        show={show.register}
        handleClose={handleClose}
        handleSwitch={handleSwitch}
      />
    </section>
  );
}
