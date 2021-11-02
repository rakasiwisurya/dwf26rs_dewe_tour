import { useParams } from "react-router";

import Header from "components/organisms/Header";
import TourTitle from "components/organisms/TourTitle";
import FeaturedImages from "components/organisms/FeaturedImages";
import InfoTrip from "components/organisms/InfoTrip";
import Description from "components/organisms/Description";
import CalculatePrice from "components/organisms/CalculatePrice";
import Footer from "components/organisms/Footer";

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
