import React from "react";

export default function DetailTitle({ data }) {
  return (
    <section className="detail-title mb-3">
      <div className="container">
        <h1 className="h4 fw-bold mb-0">{data.name}</h1>
        <div className="text-muted">{data.country}</div>
      </div>
    </section>
  );
}
