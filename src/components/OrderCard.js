import Logo from "assets/images/dewe-tour-black.png";
import QRCode from "assets/images/qr-code.png";

export default function OrderCard() {
  return (
    <section className="order-card my-5">
      <div className="container">
        <h1 className="h2 mb-2 fw-bold mb-4">History Trip</h1>
        <div className="card border border-secondary w-100 mb-3">
          <div className="card-body">
            <div className="row mb-3">
              <div className="d-flex justify-content-between">
                <img src={Logo} alt="Dewe Tour Logo" width="190" height="68" />
                <div>
                  <h1 className="h4 fw-bold text-end">Booking</h1>
                  <p className="text-end">
                    <span className="fw-bold">Saturday</span>, 22 Juy 2020
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <div className="fw-bold fs-5">6D/4N Fun Tassie Vacation</div>
                <div className="text-muted mb-4">Australia</div>
                <div
                  className={`notif p-1 d-flex justify-content-center align-items-center notif-warning`}
                >
                  Waiting Payment
                </div>
              </div>
              <div className="col-2">
                <div className="d-flex flex-column">
                  <div className="col-auto mb-4">
                    <div className="fs-6 fw-bold mb-1">Date Trip</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      26 August 2020
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="fs-6 fw-bold mb-1">Accomodation</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      Hotel 4 Nights
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="d-flex flex-column">
                  <div className="col  mb-4">
                    <div className="fs-6 fw-bold mb-1">Duration</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      6 Day 4 Night
                    </div>
                  </div>
                  <div className="col">
                    <div className="fs-6 fw-bold mb-1">Transportation</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>
                      Qatar Airways
                    </div>
                  </div>
                </div>
              </div>
              <div className="col text-center">
                <div className="file-input-group">
                  <div id="preview-thumbnail">
                    <img
                      src={QRCode}
                      alt="Barcode"
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                  <span className="text-muted" style={{ fontSize: 12 }}>
                    TCK0101
                  </span>
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
                    <td>Rakasiwi</td>
                    <td>rakasiwi@gmail.com</td>
                    <td>083896833112</td>
                    <td className="fw-bold">Qty</td>
                    <td className="fw-bold">:</td>
                    <td className="fw-bold">1</td>
                  </tr>
                  <tr className="fw-bold border-white">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>:</td>
                    <td className="text-danger">IDR. 12,398,000</td>
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
