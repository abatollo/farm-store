import { Link } from 'react-router-dom';

import { Header } from "../header/header";
import { Shop } from "../shop/shop";
import { Footer } from "../footer/footer";

const OrderPage = () => {
  return (
    <>
      <Header>
        <Link className="header__home" to="/">
          Главная
        </Link>
      </Header>
      <Shop />
      <Footer />
    </>
  );
};

export { OrderPage };
