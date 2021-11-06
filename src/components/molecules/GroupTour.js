import { Link, useHistory } from "react-router-dom";
import formatNumber from "utils/formatNumber";

export default function GroupTour({ data, isAdmin }) {
  const history = useHistory();

  return (
    <section className="group-tour mb-5">
      <div className="container">
        <div className="title text-center">
          {isAdmin ? (
            <div
              className="d-flex justify-content-between"
              style={{ paddingTop: 150 }}
            >
              <h2 className="fs-1 fw-bold">Income Trip</h2>
              <button
                className="btn btn-primary text-white fw-bold"
                style={{ width: 150, height: 40 }}
                onClick={() => {
                  history.push("/add-trip");
                }}
              >
                Add Trip
              </button>
            </div>
          ) : (
            <h2 className="fs-1 fw-bold">Group Tour</h2>
          )}
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
                      src={item.image[0].url}
                      alt={item.title}
                      className="card-img-top rounded mb-1"
                      width="328"
                      height="241"
                    />
                    <div className="capacity rounded-start bg-white text-dark d-flex justify-content-center align-items-center fw-bold">
                      {item.quota}/15
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mb-3 text-dark fw-bold text-truncate">
                        {item.title}
                      </h5>
                      <div className="card-text d-flex justify-content-between">
                        <span className="text-primary fw-bold">
                          IDR. {formatNumber(item.price)}
                        </span>
                        <span className="text-muted">{item.country.name}</span>
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
