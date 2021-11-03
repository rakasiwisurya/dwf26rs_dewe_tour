import Footer from "components/molecules/Footer";
import Header from "components/molecules/Header";
import ListTransaction from "components/molecules/ListTransaction";

import listTransaction from "json/listTransaction.json";

export default function Transaction() {
  return (
    <>
      <Header />
      <main>
        <ListTransaction data={listTransaction} />
      </main>
      <Footer />
    </>
  );
}
