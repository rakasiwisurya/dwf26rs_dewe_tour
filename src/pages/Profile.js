import Header from "components/molecules/Header";
import ProfileCard from "components/molecules/ProfileCard";
import Footer from "components/molecules/Footer";
import PaymentCard from "components/molecules/PaymentCard";

import payment from "json/payment.json";

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <ProfileCard />
        <PaymentCard data={payment} />
      </main>
      <Footer />
    </>
  );
}
