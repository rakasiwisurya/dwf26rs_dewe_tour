import { useContext, useEffect, useState } from "react";

import { AuthContext } from "contexts/AuthContext";

import Header from "components/molecules/Header";
import Hero from "components/molecules/Hero";
import Categories from "components/molecules/Categories";
import GroupTour from "components/molecules/GroupTour";
import Footer from "components/molecules/Footer";

import { API } from "config/api";

export default function Home() {
  const { stateAuth } = useContext(AuthContext);
  const [trips, setTrips] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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
        <>
          {trips === null ? (
            <div className="container">
              <div className="d-flex justify-content-center align-items-center fs-4 vh-100">
                Loading...
              </div>
            </div>
          ) : (
            <GroupTour data={trips} isAdmin={stateAuth.user.role === "admin"} />
          )}
        </>
      ) : (
        <>
          <Hero
            trips={trips}
            setIsSearching={setIsSearching}
            searchData={searchData}
            setSearchData={setSearchData}
          />
          {isSearching ? (
            <div className="mt-5">
              <GroupTour data={trips} searchData={searchData} />
            </div>
          ) : (
            <>
              <Categories />
              {trips === null ? (
                <div className="container">
                  <div className="d-flex justify-content-center align-items-center fs-4">
                    Loading...
                  </div>
                </div>
              ) : (
                <GroupTour data={trips} />
              )}
            </>
          )}
        </>
      )}
      <Footer />
    </>
  );
}
