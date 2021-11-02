import React from "react";

import Guarantee from "assets/icons/guarantee.svg";
import Love from "assets/icons/travellers-love-us.svg";
import Agent from "assets/icons/best-travel-agent.svg";
import Support from "assets/icons/our-dedicated-support.svg";

export default function Categories() {
  const data = [
    {
      id: 1,
      title: "Best Price Guarantee",
      content: "A small river named Duren flows by their place and supplies",
      icon: Guarantee,
    },
    {
      id: 2,
      title: "Travellers Love Us",
      content: "A small river named Duren flows by their place and supplies",
      icon: Love,
    },
    {
      id: 3,
      title: "Best Travel Agent",
      content: "A small river named Duren flows by their place and supplies",
      icon: Agent,
    },
    {
      id: 4,
      title: "Our Dedicated Support",
      content: "A small river named Duren flows by their place and supplies",
      icon: Support,
    },
  ];

  return (
    <section className="categories mb-4">
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div
              className="col d-flex justify-content-center"
              key={`categories-${item.id}`}
            >
              <div className="card shadow-sm text-center px-4">
                <div className="content">
                  <img src={item.icon} alt={item.id} />
                  <h3 className="fs-5 fw-bold my-4">{item.title}</h3>
                  <p className="text-muted">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
