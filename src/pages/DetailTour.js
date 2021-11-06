import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Header from "components/molecules/Header";
import TourTitle from "components/molecules/TourTitle";
import FeaturedImages from "components/molecules/FeaturedImages";
import InfoTrip from "components/molecules/InfoTrip";
import Description from "components/molecules/Description";
import CalculatePrice from "components/molecules/CalculatePrice";
import Footer from "components/molecules/Footer";

// import detailTour from "json/detailTour.json";
import { API } from "config/api";

export default function DetailTour() {
  const { id } = useParams();

  const [detailTrip, setDetailTrip] = useState(null);

  const getDetailTrip = async () => {
    try {
      const response = await API.get("/trips/" + id);
      setDetailTrip(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailTrip();
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
            <TourTitle data={detailTrip} />
            <FeaturedImages data={detailTrip} />
            <InfoTrip data={detailTrip} />
            <Description data={detailTrip} />
            <CalculatePrice data={detailTrip} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
