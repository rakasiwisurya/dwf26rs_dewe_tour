import { useState } from "react";
import { Modal } from "react-bootstrap";

import Logo from "assets/images/dewe-tour-black.png";

import formatNumber from "utils/formatNumber";
import formatDate from "utils/formatDate";
import formatWeekDay from "utils/formatWeekDay";

export default function Invoice({ isShow, handleClose, dataItem }) {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isApprove, setIsApprove] = useState(false);

  return (
    <Modal show={isShow} onHide={handleClose} centered>
      <Modal.Body className="p-4" style={{ width: 1035 }}>
        <div className="card border border-secondary mb-3">
          <div className="card-body">
            <div className="row mb-3">
              <div className="d-flex justify-content-between">
                <img src={Logo} alt="Dewe Tour Logo" width="190" height="68" />
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
                <div className="text-muted mb-4">
                  {dataItem.trip.countryName}
                </div>
                <div
                  className={`notif p-1 d-flex justify-content-center align-items-center
                  ${dataItem.status === "Waiting Payment" && "notif-warning"}
                  ${
                    (dataItem.status === "Waiting Approve" ||
                      dataItem.status === "Cancel") &&
                    "notif-danger"
                  }
                  ${dataItem.status === "Approve" && "notif-success"}
                  `}
                >
                  {dataItem.status}
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
              <div className="col">
                <div className="file-proofpayment d-flex justify-content-end">
                  <div className="d-flex justify-content-center flex-column">
                    <img
                      src={dataItem.attachment}
                      alt="attachment"
                      width="140"
                      height="140"
                    />
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      upload payment proof
                    </div>
                  </div>
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

        <div className={`d-flex justify-content-end ${isConfirm && "d-none"}`}>
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
  );
}
