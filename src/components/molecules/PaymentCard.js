import { useState } from "react";

import { InputFileProofPayment } from "components/atoms";
import formatDate from "utils/formatDate";
import formatNumber from "utils/formatNumber";
import formatWeekDay from "utils/formatWeekDay";

import Logo from "assets/images/dewe-tour-black.png";
import NoImage from "assets/images/no-image.jpg";

export default function PaymentCard({ data, setData }) {
  const [preview, setPreview] = useState(null);

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
                      {formatWeekDay(data?.createdAt)}
                    </span>
                    , {formatDate(data?.createdAt)}
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <div className="fw-bold fs-5">{data?.trip.title}</div>
                <div className="text-muted mb-4">{data?.trip.country.name}</div>
                <div
                  className={`notif p-1 d-flex justify-content-center align-items-center 
                  ${data?.status === "Waiting Payment" && "notif-danger"}
                  ${data?.status === "Waiting Approve" && "notif-warning"}
                  ${data?.status === "Cancel" && "notif-danger"}
                  ${data?.status === "Approve" && "notif-success"}
                  `}
                >
                  {data?.status}
                </div>
              </div>
              <div className="col-2">
                <div className="d-flex flex-column">
                  <div className="col-auto mb-4">
                    <div className="fs-6 fw-bold mb-1">Date Trip</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      {formatDate(data?.trip.dateTrip)}
                    </div>
                  </div>
                  <div className="col">
                    <div className="fs-6 fw-bold mb-1">Duration</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      {data?.trip.day} Day {data?.trip.night} Night
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="d-flex flex-column">
                  <div className="col-auto mb-4">
                    <div className="fs-6 fw-bold mb-1">Accomodation</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      {data?.trip.accomodation}
                    </div>
                  </div>
                  <div className="col">
                    <div className="fs-6 fw-bold mb-1">Transportation</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      {data?.trip.transportation}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                {!data?.attachment && data?.status === "Waiting Payment" && (
                  <InputFileProofPayment
                    setData={setData}
                    preview={preview}
                    setPreview={setPreview}
                  />
                )}
                {!data?.attachment && data?.status === "Cancel" && (
                  <div className="file-proofpayment d-flex justify-content-end">
                    <div className="d-flex justify-content-center flex-column">
                      <img
                        src={NoImage}
                        alt="attachment"
                        width="140"
                        height="140"
                      />
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        upload payment proof
                      </div>
                    </div>
                  </div>
                )}
                {data?.attachment && (
                  <div className="file-proofpayment d-flex justify-content-end">
                    <div className="d-flex justify-content-center flex-column">
                      <img
                        src={`${preview ? preview : data?.attachment}`}
                        alt="attachment"
                        width="140"
                        height="140"
                      />
                      <div className="text-muted" style={{ fontSize: 12 }}>
                        upload payment proof
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="row px-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th colSpan="3"></th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr>
                    <td>1</td>
                    <td>{data?.user.fullname}</td>
                    <td>{data?.user.gender}</td>
                    <td>{data?.user.phone}</td>
                    <td className="fw-bold">Qty</td>
                    <td className="fw-bold">:</td>
                    <td className="fw-bold">{data?.counterQty}</td>
                  </tr>
                  <tr className="fw-bold border-white">
                    <td colSpan="4"></td>
                    <td>Total</td>
                    <td>:</td>
                    <td className="text-danger">
                      IDR. {formatNumber(data?.total)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
