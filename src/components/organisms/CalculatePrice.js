import { useState } from "react";
import { useHistory } from "react-router-dom";

import formatNumber from "utils/formatNumber";

export default function CalculatePrice({ data }) {
  const history = useHistory();

  const [qty, setQty] = useState(1);

  let totalPrice = qty * data.price;

  const handleAdd = () => {
    setQty(qty + 1);
  };

  const handleSubtract = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleSubmit = () => {
    const userOrder = {
      id: Date.now(),
      qty: qty,
      total: totalPrice,
      isPay: false,
    };

    localStorage.setItem("userOrder", JSON.stringify(userOrder));

    history.push("/payment");
  };

  return (
    <section className="detail-calculate mb-5">
      <div className="container">
        <div className="d-flex justify-content-between fw-bold fs-5">
          <div className="price d-flex align-items-center">
            IDR.
            <span className="mx-2 text-primary">
              {formatNumber(data.price)}
            </span>
            / Person
          </div>
          <div className="quantity">
            <button
              className="btn btn-primary text-white rounded-circle fw-bold"
              onClick={handleSubtract}
            >
              -
            </button>
            <div className="d-inline-block text-center" style={{ width: 75 }}>
              {qty}
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
    </section>
  );
}
