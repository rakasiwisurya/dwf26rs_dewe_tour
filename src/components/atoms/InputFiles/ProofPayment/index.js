import { useState } from "react";

export default function ProofPayment() {
  const [filename, setFilename] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleChange = (e) => {
    setFilename(e.target.files[0].name);
    setIsUploaded(true);
  };

  return (
    <div className="input-file-proofpayment d-flex justify-content-end">
      {isUploaded ? (
        <div className="d-flex justify-content-center flex-column">
          <img
            src={`/images/${filename}`}
            alt="User"
            width="140"
            height="140"
          />
          <div className="text-muted" style={{ fontSize: 12 }}>
            upload payment proof
          </div>
        </div>
      ) : (
        <div className="proofpayment d-flex justify-content-center flex-column">
          <div
            className="input-file d-flex justify-content-center align-items-center"
            style={{ width: 140, height: 140 }}
          >
            <input
              type="file"
              hidden
              id="proofPayment"
              aria-label="file upload"
              name="proofPayment"
              onChange={handleChange}
              multiple
            />
            <label
              htmlFor="proofPayment"
              className="btn btn-primary mt-3 text-white"
              style={{ fontSize: 12 }}
            >
              Upload
            </label>
          </div>
          <div className="text-muted" style={{ fontSize: 12 }}>
            upload payment proof
          </div>
        </div>
      )}
    </div>
  );
}
