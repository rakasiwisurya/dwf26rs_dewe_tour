import Header from "components/Header";
import ProfileCard from "components/ProfileCard";
import Footer from "components/Footer";
import PaymentCard from "components/PaymentCard";

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
