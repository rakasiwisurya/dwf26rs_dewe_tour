import React from "react";
import { useParams } from "react-router";

import Header from "components/Header";
import DetailTitle from "components/DetailTitle";
import DetailFeaturedImages from "components/DetailFeaturedImages";
import DetailInfoTrip from "components/DetailInfoTrip";
import DetailDescription from "components/DetailDescription";
import DetailCalculate from "components/DetailCalculate";
import Footer from "components/Footer";
import detail from "json/detail.json";

export default function Detail() {
  const params = useParams();
  const index = params.id - 1;

  return (
    <>
      <Header />
      <main>
        <DetailTitle data={detail[index]} />
        <DetailFeaturedImages data={detail[index]} />
        <DetailInfoTrip data={detail[index].infoTrip} />
        <DetailDescription data={detail[index]} />
        <DetailCalculate data={detail[index]} />
      </main>
      <Footer />
    </>
  );
}
