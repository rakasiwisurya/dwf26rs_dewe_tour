import React from "react";

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
                <a href="/" className="link-dark text-decoration-none">
                  <div className="card shadow-sm p-2">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="card-img-top rounded mb-1"
                      width="328"
                      height="241"
                    />
                    <div className="capacity rounded-start bg-white d-flex justify-content-center align-items-center fw-bold">
                      {item.capacity}/15
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mb-3">{item.name}</h5>
                      <div className="card-text d-flex justify-content-between">
                        <span className="text-primary fw-bold">
                          IDR. {Intl.NumberFormat().format(item.price)}
                        </span>
                        <span className="text-muted">{item.country}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}

          {/* <div className="col d-flex justify-content-center">
            <a href="#" className="link-dark text-decoration-none">
              <div className="card shadow-sm p-2">
                <img
                  src="/assets/images/6d-4n-exciting-summer.jpg"
                  alt="image-data"
                  className="card-img-top rounded mb-1"
                  width="328"
                  height="241"
                />
                <div className="capacity rounded-start bg-white d-flex justify-content-center align-items-center fw-bold">
                  14/15
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-3">6D/4N Exciting Summer</h5>
                  <div className="card-text d-flex justify-content-between">
                    <span className="text-primary fw-bold">
                      IDR. 10,288,000
                    </span>
                    <span className="text-muted">South Korea</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col d-flex justify-content-center">
            <a href="#" className="link-dark text-decoration-none">
              <div className="card shadow-sm p-2">
                <img
                  src="/assets/images/4d-3n-labuan-bajo-delight.jpg"
                  alt="image-data"
                  className="card-img-top rounded mb-1"
                  width="328"
                  height="241"
                />
                <div className="capacity rounded-start bg-white d-flex justify-content-center align-items-center fw-bold">
                  10/15
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-3">8D/6N Wonderful Autumn</h5>
                  <div className="card-text d-flex justify-content-between">
                    <span className="text-primary fw-bold">
                      IDR. 28,999,000
                    </span>
                    <span className="text-muted">Japan</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col d-flex justify-content-center">
            <a href="#" className="link-dark text-decoration-none">
              <div className="card shadow-sm p-2">
                <img
                  src="/assets/images/4d-3n-overland-jakarta.jpg"
                  alt="image-data"
                  className="card-img-top rounded mb-1"
                  width="328"
                  height="241"
                />
                <div className="capacity rounded-start bg-white d-flex justify-content-center align-items-center fw-bold">
                  10/15
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-3">4D/3N Overland Jakarta</h5>
                  <div className="card-text d-flex justify-content-between">
                    <span className="text-primary fw-bold">IDR. 3,188,000</span>
                    <span className="text-muted">Indonesia</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col d-flex justify-content-center">
            <a href="#" className="link-dark text-decoration-none">
              <div className="card shadow-sm p-2">
                <img
                  src="/assets/images/4d-3n-labuan-bajo-delight.jpg"
                  alt="image-data"
                  className="card-img-top rounded mb-1"
                  width="328"
                  height="241"
                />
                <div className="capacity rounded-start bg-white d-flex justify-content-center align-items-center fw-bold">
                  14/15
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-3">4D/3N Labuan Bajo Delight</h5>
                  <div className="card-text d-flex justify-content-between">
                    <span className="text-primary fw-bold">
                      IDR. 10,488,000
                    </span>
                    <span className="text-muted">Indonesia</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col d-flex justify-content-center">
            <a href="#" className="link-dark text-decoration-none">
              <div className="card shadow-sm p-2">
                <img
                  src="/assets/images/5d-4n-magic-tokyo-fun.jpg"
                  alt="image-data"
                  className="card-img-top rounded mb-1"
                  width="328"
                  height="241"
                />
                <div className="capacity rounded-start bg-white d-flex justify-content-center align-items-center fw-bold">
                  10/15
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-3">5D/4N Magic Tokyo Fun</h5>
                  <div className="card-text d-flex justify-content-between">
                    <span className="text-primary fw-bold">
                      IDR. 11,188,000
                    </span>
                    <span className="text-muted">Japan</span>
                  </div>
                </div>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
