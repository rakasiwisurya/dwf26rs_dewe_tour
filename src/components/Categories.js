import React from "react";

import Guarantee from "assets/icons/guarantee.svg";
import Love from "assets/icons/travellers-love-us.svg";
import Agent from "assets/icons/best-travel-agent.svg";
import Support from "assets/icons/our-dedicated-support.svg";

export default function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="card shadow-sm text-center px-4">
              <div className="content">
                <img src={Guarantee} alt="Guarantee" className="mb-4" />
                <h3 className="fs-5 fw-bold mb-3">Best Price Guarantee</h3>
                <p className="fs-sm text-muted">
                  A small river named Duren flows by their place and supplies
                </p>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="card shadow-sm text-center px-4">
              <div className="content">
                <img src={Love} alt="Love" className="mb-4" />
                <h3 className="fs-5 fw-bold mb-3">Travellers Love Us</h3>
                <p className="text-muted">
                  A small river named Duren flows by their place and supplies
                </p>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="card shadow-sm text-center px-4">
              <div className="content">
                <img src={Agent} alt="Agent" className="mb-4" />
                <h3 className="fs-5 fw-bold mb-3">Best Travel Agent</h3>
                <p className="text-muted">
                  A small river named Duren flows by their place and supplies
                </p>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="card shadow-sm text-center px-4">
              <div className="content">
                <img src={Support} alt="Support" className="mb-4" />
                <h3 className="fs-5 fw-bold mb-3">Our Dedicated Support</h3>
                <p className="text-muted">
                  A small river named Duren flows by their place and supplies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
