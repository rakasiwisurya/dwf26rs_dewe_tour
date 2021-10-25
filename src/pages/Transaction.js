import Footer from "components/Footer";
import Header from "components/Header";
import ListTransaction from "components/ListTransaction";

export default function Transaction() {
  return (
    <>
      <Header />
      <main>
        <ListTransaction />
      </main>
      <Footer />
    </>
  );
}
