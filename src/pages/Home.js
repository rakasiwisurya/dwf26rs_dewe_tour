import { useContext, useEffect, useState } from "react";

import { AuthContext } from "contexts/AuthContext";

import Header from "components/molecules/Header";
import Hero from "components/molecules/Hero";
import Categories from "components/molecules/Categories";
import GroupTour from "components/molecules/GroupTour";
import Footer from "components/molecules/Footer";

import { API } from "config/api";

// import home from "json/home.json";

export default function Home() {
  const { stateAuth } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);

  const getTrips = async () => {
    try {
      const response = await API.get("/trips");
      setTrips(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <>
      <Header />
      {stateAuth.user.role === "admin" ? (
        <GroupTour data={trips} isAdmin={stateAuth} />
      ) : (
        <>
          <Hero />
          <Categories />
          <GroupTour data={trips} />
        </>
      )}
      <Footer />
    </>
  );
}
