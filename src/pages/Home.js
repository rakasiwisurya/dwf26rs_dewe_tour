import React from "react";
import Header from "components/Header";
import Hero from "components/Hero";
import Categories from "components/Categories";
import GroupTour from "components/GroupTour";
import Footer from "components/Footer";
import home from "json/home.json";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <GroupTour data={home} />
      <Footer />
    </>
  );
}
