import { useState } from "react";
import { useHistory } from "react-router-dom";

import { ModalLogin, ModalRegister } from "components/atoms";

import { API } from "config/api";
import formatNumber from "utils/formatNumber";

export default function CalculatePrice({ tripId, price, stateAuth }) {
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
    if (transaction.counterQty < 10) {
      const add = transaction.counterQty + 1;
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
        const confirmation = window.confirm(
          "Are you sure want to book this one?"
        );

        if (confirmation) {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          const body = JSON.stringify(transaction);
          const response = await API.post("/transactions", body, config);

          response.data.status === "success" && alert(response.data.message);

          history.push("/payment");
        }
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
