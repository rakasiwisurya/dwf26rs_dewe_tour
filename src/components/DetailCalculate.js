import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailCalculate({ data }) {
  const params = useParams();

  const [state, setState] = useState({
    unit: 1,
    total: data.price,
  });

  let totalPrice = state.total * state.unit;

  const handleAdd = () => {
    let add = state.unit + 1;

    setState((prevState) => ({ ...prevState, unit: add }));
  };

  const handleSubtract = () => {
    let subtract = state.unit - 1;

    if (state.unit > 1) {
      setState((prevState) => ({ ...prevState, unit: subtract }));
    }
  };

  return (
    <section className="detail-calculate mb-5">
      <div className="container">
        <div className="d-flex justify-content-between fw-bold fs-5">
          <div className="price d-flex align-items-center">
            IDR.
            <span className="mx-2 text-primary">
              {Intl.NumberFormat().format(data.price)}
            </span>
            / Person
          </div>
          <div className="unit">
            <button
              className="btn btn-primary text-white rounded-circle fw-bold"
              onClick={handleSubtract}
            >
              -
            </button>
            <div className="d-inline-block text-center" style={{ width: 75 }}>
              {state.unit}
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
            IDR. {Intl.NumberFormat().format(totalPrice)}
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <Link
            to={`/payment/${params.id}`}
            type="button"
            className="btn btn-primary px-5 mt-2 fw-bold text-white "
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
