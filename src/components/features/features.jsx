const Features = () => {
  return (
    <section className="features container center">
      <h2 className="features__heading">Почему фермерские продукты лучше?</h2>
      <ul className="features__list list-reset">
        <li>
          <ul className="features__sublist list-reset">
            <li className="features__subitem">
              <h3 className="features__item-heading">Еда намного вкуснее</h3>
              <p className="features__item-description">Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники</p>
            </li>
            <li className="features__subitem features__subitem--expired">
              <h3 className="features__item-heading">Просроченные продукты</h3>
              <p className="features__item-description">Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара</p>
            </li>
          </ul>
        </li>
        <li>
          <ul className="features__sublist list-reset">
            <li className="features__subitem features__subitem--natural">
              <h3 className="features__item-heading">Натуральные продукты</h3>
              <p className="features__item-description">Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.</p>
            </li>
            <li className="features__subitem features__subitem--bad-meat">
              <h3 className="features__item-heading">Некачественное мясо</h3>
              <p className="features__item-description">Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов</p>
            </li>
          </ul>
        </li>
      </ul>
      <a className="features__button button" href="/buy">
        Купить
      </a>
    </section>
  );
};

export { Features };
