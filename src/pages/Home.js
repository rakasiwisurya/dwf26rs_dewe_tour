import { useContext } from "react";

import { AuthContext } from "contexts/AuthContext";

import Header from "components/Header";
import Hero from "components/Hero";
import Categories from "components/Categories";
import GroupTour from "components/GroupTour";
import Footer from "components/Footer";

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
