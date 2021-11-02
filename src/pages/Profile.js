import Header from "components/organisms/Header";
import ProfileCard from "components/organisms/ProfileCard";
import Footer from "components/organisms/Footer";
import PaymentCard from "components/organisms/PaymentCard";

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
