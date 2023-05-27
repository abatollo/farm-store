import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import Order from "../pages/order/order";
import { AppRoute } from "../../const";
import features from "../../mocks/features";
import products from "../../mocks/products";
import ScrollTop from "../ui/scroll-top/scroll-top";
import { GlobalStyle } from "./styles";

// Корневой компонент всего приложения
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
