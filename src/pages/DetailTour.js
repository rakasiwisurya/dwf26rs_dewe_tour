import { useParams } from "react-router";

import Header from "components/Header";
import DetailTitle from "components/DetailTitle";
import DetailFeaturedImages from "components/DetailFeaturedImages";
import DetailInfoTrip from "components/DetailInfoTrip";
import DetailDescription from "components/DetailDescription";
import DetailCalculate from "components/DetailCalculate";
import Footer from "components/Footer";

import detailTour from "json/detailTour.json";

export default function DetailTour() {
  const params = useParams();
  const index = params.id - 1;

  return (
    <>
      <Header />
      <main>
        <DetailTitle data={detailTour[index]} />
        <DetailFeaturedImages data={detailTour[index]} />
        <DetailInfoTrip data={detailTour[index].infoTrip} />
        <DetailDescription data={detailTour[index]} />
        <DetailCalculate data={detailTour[index]} />
      </main>
      <Footer />
    </>
  );
}
