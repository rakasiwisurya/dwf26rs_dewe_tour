import Header from "components/Header";
import ProfileCard from "components/ProfileCard";
import Footer from "components/Footer";
import OrderCard from "components/OrderCard";

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <ProfileCard />
        <OrderCard />
      </main>
      <Footer />
    </>
  );
}
