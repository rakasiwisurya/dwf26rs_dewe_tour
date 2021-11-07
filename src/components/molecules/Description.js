export default function Description({ description }) {
  return (
    <section className="detail-description mb-5">
      <div className="container">
        <h2 className="h5 fw-bold mb-3">Description</h2>
        <p className="text-muted" style={{ textAlign: "justify" }}>
          {description}
        </p>
      </div>
    </section>
  );
}
