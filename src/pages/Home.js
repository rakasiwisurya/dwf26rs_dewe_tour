import { useContext } from "react";

import { AuthContext } from "contexts/AuthContext";

import Header from "components/organisms/Header";
import Hero from "components/organisms/Hero";
import Categories from "components/organisms/Categories";
import GroupTour from "components/organisms/GroupTour";
import Footer from "components/organisms/Footer";

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
