import { useState } from "react";
import { Modal } from "react-bootstrap";

import Magnify from "assets/icons/magnify.svg";
import Logo from "assets/images/dewe-tour-black.png";
import PaymentProof from "assets/images/payment-proof.jpg";

import formatNumber from "utils/formatNumber";
import formatDate from "utils/formatDate";
import formatWeekDay from "utils/formatWeekDay";

export default function ListTransaction({ data }) {
  const [isShow, setIsShow] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isApprove, setIsApprove] = useState(false);
  const [dataItem, setDataItem] = useState({
    id: "",
    qty: "",
    total: "",
    bookDate: "2020-12-12",
    user: {
      fullname: "",
      email: "",
      phone: "",
    },
    trip: {
      name: "",
      country: "",
      dateTrip: "2020-12-12",
      accomodation: "",
      duration: {
        day: "",
        night: "",
      },
      transportation: "",
    },
  });

  return (
    <section className="list-transaction">
      <div className="container">
        <h1 className="h4 fw-bold mb-4">Incoming Transaction</h1>
        <table className="table bg-white" style={{ fontSize: 12 }}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Users</th>
              <th scope="col">Trip</th>
              <th scope="col">Bukti Transfer</th>
              <th scope="col">Status Payment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={`list-transaction-${item.id}`}>
                  <td>{index + 1}</td>
                  <td>{item.user.fullname}</td>
                  <td>{item.trip.name}</td>
                  <td>{item.proofPayment}</td>
                  <td
                    className={`fw-bold
                        ${item.status === "Pending" && "text-primary"}
                        ${item.status === "Approve" && "text-success"}
                        ${item.status === "Cancel" && "text-danger"}`}
                  >
                    {item.status}
                  </td>
                  <td>
                    <img
                      src={Magnify}
                      alt="Magnify"
                      width="25"
                      height="25"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setDataItem({
                          id: item.id,
                          qty: item.qty,
                          total: item.total,
                          bookDate: item.bookDate,
                          user: {
                            fullname: item.user.fullname,
                            email: item.user.email,
                            phone: item.user.phone,
                          },
                          trip: {
                            name: item.trip.name,
                            country: item.trip.country,
                            dateTrip: item.trip.dateTrip,
                            accomodation: item.trip.accomodation,
                            duration: {
                              day: item.trip.duration.day,
                              night: item.trip.duration.night,
                            },
                            transportation: item.trip.transportation,
                          },
                        });
                        setIsShow(true);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal
        show={isShow}
        onHide={() => {
          setIsShow(false);
        }}
        centered
      >
        <Modal.Body className="p-4" style={{ width: 1035 }}>
          <div className="card border border-secondary mb-3">
            <div className="card-body">
              <div className="row mb-3">
                <div className="d-flex justify-content-between">
                  <img
                    src={Logo}
                    alt="Dewe Tour Logo"
                    width="190"
                    height="68"
                  />
                  <div>
                    <h1 className="h4 fw-bold text-end">Booking</h1>
                    <p className="text-end">
                      <span className="fw-bold">
                        {formatWeekDay(dataItem.bookDate)}
                      </span>
                      , {formatDate(dataItem.bookDate)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-4">
                  <div className="fw-bold fs-5">{dataItem.trip.name}</div>
                  <div className="text-muted mb-4">{dataItem.trip.country}</div>
                  <div
                    className={`notif p-1 d-flex justify-content-center align-items-center ${
                      isConfirm
                        ? isApprove
                          ? "notif-success"
                          : "notif-danger"
                        : "notif-warning"
                    }`}
                  >
                    {isConfirm
                      ? isApprove
                        ? "Approved"
                        : "Canceled"
                      : "Waiting Approve"}
                  </div>
                </div>
                <div className="col-2">
                  <div className="d-flex flex-column">
                    <div className="col-auto mb-4">
                      <div className="fs-6 fw-bold mb-1">Date Trip</div>
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        {formatDate(dataItem.trip.dateTrip)}
                      </div>
                    </div>
                    <div className="col">
                      <div className="fs-6 fw-bold mb-1">Duration</div>
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        {dataItem.trip.duration.day} Day{" "}
                        {dataItem.trip.duration.night} Night
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="d-flex flex-column">
                    <div className="col-auto mb-4">
                      <div className="fs-6 fw-bold mb-1">Accomodation</div>
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        {dataItem.trip.accomodation}
                      </div>
                    </div>
                    <div className="col">
                      <div className="fs-6 fw-bold mb-1">Transportation</div>
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        {dataItem.trip.transportation}
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
                      <td>{dataItem.user.fullname}</td>
                      <td>{dataItem.user.email}</td>
                      <td>{dataItem.user.phone}</td>
                      <td className="fw-bold">Qty</td>
                      <td className="fw-bold">:</td>
                      <td className="fw-bold">{dataItem.qty}</td>
                    </tr>
                    <tr className="fw-bold border-white">
                      <td colSpan="4"></td>
                      <td>Total</td>
                      <td>:</td>
                      <td className="text-danger">
                        IDR. {formatNumber(dataItem.total)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            className={`d-flex justify-content-end ${isConfirm && "d-none"}`}
          >
            <button
              className="btn btn-danger mt-2 fw-bold text-white me-3"
              style={{ width: 100, height: 35 }}
              onClick={() => {
                setIsConfirm(true);
                setIsApprove(false);
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-success mt-2 fw-bold text-white"
              style={{ width: 100, height: 35 }}
              onClick={() => {
                setIsConfirm(true);
                setIsApprove(true);
              }}
            >
              Approve
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
