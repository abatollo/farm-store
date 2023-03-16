import { Link } from 'react-router-dom';

import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container center">
        <Link className="header__link" to="/">
          <img src={Logo} width="44" height="44" alt="" />
          Фермерские продукты
        </Link>
          Создано 2021
      </div>
    </footer>
  );
};

export { Footer };
