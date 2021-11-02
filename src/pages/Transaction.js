import Footer from "components/organisms/Footer";
import Header from "components/organisms/Header";
import ListTransaction from "components/organisms/ListTransaction";

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
