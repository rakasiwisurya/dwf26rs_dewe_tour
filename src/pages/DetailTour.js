import { useParams } from "react-router";

import Header from "components/molecules/Header";
import TourTitle from "components/molecules/TourTitle";
import FeaturedImages from "components/molecules/FeaturedImages";
import InfoTrip from "components/molecules/InfoTrip";
import Description from "components/molecules/Description";
import CalculatePrice from "components/molecules/CalculatePrice";
import Footer from "components/molecules/Footer";

import detailTour from "json/detailTour.json";

export default function DetailTour() {
  const params = useParams();
  const index = params.id - 1;

  return (
    <>
      <Header />
      <main>
        <TourTitle data={detailTour[index]} />
        <FeaturedImages data={detailTour[index]} />
        <InfoTrip data={detailTour[index].infoTrip} />
        <Description data={detailTour[index]} />
        <CalculatePrice data={detailTour[index]} />
      </main>
      <Footer />
    </>
  );
}
