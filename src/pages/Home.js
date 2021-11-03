import { useContext } from "react";

import { AuthContext } from "contexts/AuthContext";

import Header from "components/molecules/Header";
import Hero from "components/molecules/Hero";
import Categories from "components/molecules/Categories";
import GroupTour from "components/molecules/GroupTour";
import Footer from "components/molecules/Footer";

import home from "json/home.json";

export default function Home() {
  const { stateAuth } = useContext(AuthContext);

  return (
    <>
      <Header />
      {stateAuth.user.role === "admin" ? (
        <GroupTour data={home} isAdmin={stateAuth} />
      ) : (
        <>
          <Hero />
          <Categories />
          <GroupTour data={home} />
        </>
      )}
      <Footer />
    </>
  );
}
