import { useParams } from "react-router";

import Header from "components/Header";
import PaymentCard from "components/PaymentCard";
import Footer from "components/Footer";

import payment from "json/payment.json";

export default function Payment() {
  const params = useParams();
  const index = params.id - 1;

  return (
    <>
      <Header />
      <main>
        <PaymentCard data={payment[index]} />
      </main>
      <Footer />
    </>
  );
}
