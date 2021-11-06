export default function TourTitle({ data }) {
  return (
    <section className="detail-title mb-3">
      <div className="container">
        <h1 className="h4 fw-bold mb-0">{data?.title}</h1>
        <div className="text-muted">{data?.country.name}</div>
      </div>
    </section>
  );
}
