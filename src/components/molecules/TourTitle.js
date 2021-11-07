export default function TourTitle({ title, countryName }) {
  return (
    <section className="detail-title mb-3">
      <div className="container">
        <h1 className="h4 fw-bold mb-0">{title}</h1>
        <div className="text-muted">{countryName}</div>
      </div>
    </section>
  );
}
