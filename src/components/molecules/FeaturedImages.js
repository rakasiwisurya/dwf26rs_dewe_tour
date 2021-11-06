export default function FeaturedImages({ data }) {
  return (
    <section className="detail-featured-images mb-5">
      <div className="container">
        <div className="row g-3">
          {data.image.map((item, index) => {
            return (
              <div
                key={`featuredImage-${index}`}
                className={`${index > 0 ? "col-4" : "col-12"}`}
              >
                <div className="card w-100">
                  <img
                    height={`${index > 0 ? "214" : "459"}`}
                    src={item.url}
                    alt={item.id}
                    className="card-img rounded"
                  />

                  {index === 3 ? (
                    <div
                      className="card-img-overlay d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.2})`,
                      }}
                    >
                      <div className="card-text fw-bold fs-4 text-white">
                        +5
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
