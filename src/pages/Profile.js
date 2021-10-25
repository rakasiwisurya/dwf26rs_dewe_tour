import { useParams } from "react-router-dom";

import Header from "components/Header";
import ProfileCard from "components/ProfileCard";
import Footer from "components/Footer";
import PaymentCard from "components/PaymentCard";

import payment from "json/payment.json";

export default function Profile() {
  const params = useParams();
  const index = params.id - 1;

  return (
    <>
      <Header />
      <main>
        <ProfileCard />
        {/* <PaymentCard data={payment[index]} /> */}
      </main>
      <Footer />
    </>
  );
}
