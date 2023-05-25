import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Order from "../../pages/order/order";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <Main>
        <Order products={products} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;