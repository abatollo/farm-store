import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container center">
        <a className="header__link" href="/">
          <img src={Logo} width="44" height="44" alt="" />
          Фермерские продукты
        </a>
        {/* <a className="header__button button" href="/buy">
          Купить
        </a> */}
        <a className="header__home" href="/">
          Главная
        </a>
      </div>
    </header>
  );
};

export { Header };
