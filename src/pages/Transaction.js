import Footer from "components/Footer";
import Header from "components/Header";
import ListTransaction from "components/ListTransaction";

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
