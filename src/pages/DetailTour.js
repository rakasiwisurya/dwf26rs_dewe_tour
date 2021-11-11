import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { AuthContext } from "contexts/AuthContext";
import { API } from "config/api";

import Header from "components/molecules/Header";
import TourTitle from "components/molecules/TourTitle";
import FeaturedImages from "components/molecules/FeaturedImages";
import InfoTrip from "components/molecules/InfoTrip";
import Description from "components/molecules/Description";
import CalculatePrice from "components/molecules/CalculatePrice";
import Footer from "components/molecules/Footer";

export default function DetailTour() {
  const { id } = useParams();

  const { stateAuth } = useContext(AuthContext);

  const [detailTrip, setDetailTrip] = useState(null);

  const getDetailTrip = async (id) => {
    try {
      const response = await API.get("/trips/" + id);
      setDetailTrip(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailTrip(id);
  }, []);

  return (
    <>
      <Header />
      <main>
        {detailTrip === null ? (
          <div className="container">
            <div className="d-flex justify-content-center align-items-center fs-4 vh-100">
              Loading...
            </div>
          </div>
        ) : (
          <>
            <TourTitle
              title={detailTrip.title}
              countryName={detailTrip.country.name}
            />
            <FeaturedImages images={detailTrip.image} />
            <InfoTrip
              accomodation={detailTrip.accomodation}
              transportation={detailTrip.transportation}
              eat={detailTrip.eat}
              day={detailTrip.day}
              night={detailTrip.night}
              dateTrip={detailTrip.dateTrip}
            />
            <Description description={detailTrip.description} />
            <CalculatePrice
              tripId={detailTrip.id}
              price={detailTrip.price}
              quota={detailTrip.quota}
              stateAuth={stateAuth}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
