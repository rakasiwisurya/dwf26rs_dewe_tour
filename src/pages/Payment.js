import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import Header from "components/organisms/Header";
import PaymentCard from "components/organisms/PaymentCard";
import Footer from "components/organisms/Footer";

import payment from "json/payment.json";

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

        <Modal show={isShow} onHide={handleClose} centered>
          <Modal.Body className="p-4 text-center">
            <div>Your payment will be confirmed within 1 x 24 hours</div>
            <div>
              To see orders{" "}
              <Link to="/" className="fw-bold text-dark">
                click here
              </Link>{" "}
              thank you
            </div>
          </Modal.Body>
        </Modal>
      </main>
      <Footer />
    </>
  );
}
