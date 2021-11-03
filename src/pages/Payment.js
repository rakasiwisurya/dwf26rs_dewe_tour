import { useState } from "react";

import Header from "components/molecules/Header";
import PaymentCard from "components/molecules/PaymentCard";
import Footer from "components/molecules/Footer";

import payment from "json/payment.json";
import { ModalPopUp } from "components/atoms";

export default function Payment() {
  const [isPay, setIsPay] = useState(false);

  const [isShow, setIsShow] = useState(false);

  const handlePay = () => {
    // localStorage.setItem("userOrder", JSON.stringify(order));
    setIsPay(true);
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <>
      <Header />
      <main>
        <PaymentCard data={payment} isPay={isPay} />
        <div className="container">
          <div className="d-flex justify-content-end">
            <button
              className={`btn btn-primary mt-2 fw-bold text-white ${
                isPay && "d-none"
              }`}
              style={{ width: 213, height: 50 }}
              onClick={handlePay}
            >
              PAY
            </button>
          </div>
        </div>
        <ModalPopUp isShow={isShow} handleClose={handleClose} />
      </main>
      <Footer />
    </>
  );
}
