import { Link } from "react-router-dom";

export default function GroupTour({ data }) {
  return (
    <section className="group-tour mb-5">
      <div className="container">
        <div className="title text-center">
          <h2 className="fs-1 fw-bold">Group Tour</h2>
        </div>
        <div className="row gy-5 pb-5">
          {data.map((item, index) => {
            return (
              <div
                key={`groupTour-index${index}`}
                className="col d-flex justify-content-center"
              >
                <Link
                  to={`/detail/${item.id}`}
                  className="text-decoration-none"
                >
                  <div className="card shadow-sm p-2">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="card-img-top rounded mb-1"
                      width="328"
                      height="241"
                    />
                    <div className="capacity rounded-start bg-white text-dark d-flex justify-content-center align-items-center fw-bold">
                      {item.capacity}/15
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mb-3 text-dark fw-bold">
                        {item.name}
                      </h5>
                      <div className="card-text d-flex justify-content-between">
                        <span className="text-primary fw-bold">
                          IDR. {Intl.NumberFormat().format(item.price)}
                        </span>
                        <span className="text-muted">{item.country}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
