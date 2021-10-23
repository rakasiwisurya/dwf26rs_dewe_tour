import React from "react";

export default function DetailDescription({ data }) {
  return (
    <section className="detail-description mb-5">
      <div className="container">
        <h2 className="h5 fw-bold mb-3">Description</h2>
        <p className="text-muted" style={{ textAlign: "justify" }}>
          {data.description}
        </p>
      </div>
    </section>
  );
}
