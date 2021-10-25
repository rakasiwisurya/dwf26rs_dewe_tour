import { useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailCalculate({ data }) {
  const params = useParams();

  // const initialState = { qty: 1 };

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return { qty: state.qty + 1 };
  //     case "DECREMENT":
  //       if (state.qty > 1) {
  //         return { qty: state.qty - 1 };
  //       }
  //       return { qty: state.qty };
  //     default:
  //       throw new Error();
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);

  // let totalPrice = state.qty * data.price;

  const [qty, setQty] = useState(1);

  let totalPrice = qty * data.price;

  const handleAdd = () => {
    // dispatch({ type: "INCREMENT" })
    setQty(qty + 1);
  };

  const handleSubtract = () => {
    // dispatch({ type: "DECREMENT" })
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
          <div className="quantity">
            <button
              className="btn btn-primary text-white rounded-circle fw-bold"
              onClick={handleSubtract}
            >
              -
            </button>
            <div className="d-inline-block text-center" style={{ width: 75 }}>
              {/* {state.qty} */}
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
            {/* IDR. {Intl.NumberFormat().format(totalPrice)} */}
            IDR. {Intl.NumberFormat().format(totalPrice)}
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <Link
            to={`/payment/${params.id}`}
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary mt-2 fw-bold text-white d-flex align-items-center justify-content-center"
            style={{ width: 213, height: 50 }}
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
