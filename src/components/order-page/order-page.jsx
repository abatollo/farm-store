import { Link } from 'react-router-dom';

import { Shop } from '../shop/shop';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

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
