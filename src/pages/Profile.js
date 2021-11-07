import { useContext } from "react";

import { AuthContext } from "contexts/AuthContext";

import Header from "components/molecules/Header";
import ProfileCard from "components/molecules/ProfileCard";
import Footer from "components/molecules/Footer";
import PaymentCard from "components/molecules/PaymentCard";

// import payment from "json/payment.json";

export default function Profile() {
  const { stateAuth } = useContext(AuthContext);

  return (
    <>
      <Header />
      <main>
        <ProfileCard stateAuth={stateAuth} />
        {/* <PaymentCard data={payment} /> */}
      </main>
      <Footer />
    </>
  );
}
