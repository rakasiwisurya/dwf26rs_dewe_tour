import { useContext, useEffect, useState } from "react";

import { AuthContext } from "contexts/AuthContext";

import Logo from "assets/images/dewe-tour-black.png";
import PaymentProof from "assets/images/payment-proof.jpg";

export default function PaymentCard({ data }) {
  const today = new Date();
  const dateTrip = new Date(data.infoTrip.dateTrip);

  const { stateAuth } = useContext(AuthContext);

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const userOrder = JSON.parse(localStorage.getItem("userOrder"));
    setOrder(userOrder);
  }, []);

  const handlePay = () => {
    setOrder((prevState) => ({ ...prevState, isPay: true }));
    localStorage.setItem("userOrder", JSON.stringify(order));
  };

  console.log(order);

  return (
    <section className="payment-card">
      <div className="container">
        <div className="card border border-secondary w-100 mb-3">
          <div className="card-body">
            <div className="row mb-3">
              <div className="d-flex justify-content-between">
                <img src={Logo} alt="Dewe Tour Logo" width="190" height="68" />
                <div>
                  <h1 className="h4 fw-bold text-end">Booking</h1>
                  <p className="text-end">
                    <span className="fw-bold">
                      {Intl.DateTimeFormat("id-ID", {
                        weekday: "long",
                      }).format(today)}
                    </span>
                    ,{" "}
                    {Intl.DateTimeFormat("id-ID", {
                      dateStyle: "long",
                    }).format(today)}
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <div className="fw-bold fs-5">{data.name}</div>
                <div className="text-muted mb-4">{data.country}</div>
                <div
                  className={`notif p-1 d-flex justify-content-center align-items-center ${
                    order?.isPay ? "notif-warning" : "notif-danger"
                  }`}
                >
                  {order?.isPay ? "Waiting Approve" : "Waiting Payment"}
                </div>
              </div>
              <div className="col-2">
                <div className="d-flex flex-column">
                  <div className="col-auto mb-4">
                    <div className="fs-6 fw-bold mb-1">Date Trip</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      {Intl.DateTimeFormat("id-ID", {
                        dateStyle: "long",
                      }).format(dateTrip)}
                    </div>
                  </div>
                  <div className="col">
                    <div className="fs-6 fw-bold mb-1">Duration</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      {data.infoTrip.duration.day} Day{" "}
                      {data.infoTrip.duration.night} Night
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="d-flex flex-column">
                  <div className="col-auto mb-4">
                    <div className="fs-6 fw-bold mb-1">Accomodation</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      {data.infoTrip.accomodation}
                    </div>
                  </div>
                  <div className="col">
                    <div className="fs-6 fw-bold mb-1">Transportation</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      {data.infoTrip.transportation}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col text-end">
                <div className="file-input-group">
                  <div id="preview-thumbnail">
                    <img
                      src={PaymentProof}
                      alt="Payment Proof"
                      style={{ width: 140, height: 140 }}
                    />
                  </div>
                  <input
                    type="file"
                    hidden
                    id="file"
                    aria-label="file upload"
                    name="image"
                    // onchange="handleChange()"
                  />
                  <label
                    htmlFor="file"
                    className="text-muted"
                    style={{ fontSize: 12 }}
                  >
                    upload payment proof
                  </label>
                </div>
              </div>
            </div>

            <div className="row px-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th colSpan="3"></th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr>
                    <td>1</td>
                    <td>{stateAuth.user.fullname}</td>
                    <td>{stateAuth.user.email}</td>
                    <td>{stateAuth.user.phone}</td>
                    <td className="fw-bold">Qty</td>
                    <td className="fw-bold">:</td>
                    <td className="fw-bold">{order?.qty}</td>
                  </tr>
                  <tr className="fw-bold border-white">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>:</td>
                    <td className="text-danger">
                      IDR. {Intl.NumberFormat().format(order?.total)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className={`btn btn-primary mt-2 fw-bold text-white ${
              order?.isPay ? "d-none" : ""
            }`}
            style={{ width: 213, height: 50 }}
            onClick={handlePay}
          >
            PAY
          </button>
        </div>
      </div>
    </section>
  );
}
