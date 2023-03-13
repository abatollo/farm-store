import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container center">
        <a className="header__link" href="/">
          <img src={Logo} width="44" height="44" alt="" />
          Фермерские продукты
        </a>
          Создано 2021
      </div>
    </footer>
  );
};

export { Footer };
