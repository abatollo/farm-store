const Filter = () => {
  return (
    <aside>
      <section className="filter">
        <h2 className="filter__heading">Выберите продукты</h2>
        <ul className="filter__list list-reset">
          <li className="filter__item">
            <input className="filter__checkbox visually-hidden" type="checkbox" name="" id="chicken-thigh-fillet" />
            <label className="filter__label" htmlFor="chicken-thigh-fillet">Филе бедра цыплёнка</label>
          </li>
          <li className="filter__item">
            <input className="filter__checkbox visually-hidden" type="checkbox" name="" id="goose-thigh-fillet" />
            <label className="filter__label" htmlFor="goose-thigh-fillet">Филе бедра гуся</label>
          </li>
          <li className="filter__item">
            <input className="filter__checkbox visually-hidden" type="checkbox" name="" id="beef-thigh-flesh" />
            <label className="filter__label" htmlFor="beef-thigh-flesh">Мякоть бедра говяжья</label>
          </li>
          <li className="filter__item">
            <input className="filter__checkbox visually-hidden" type="checkbox" name="" id="chicken-breast-on-the-bone" />
            <label className="filter__label" htmlFor="chicken-breast-on-the-bone">Грудка цыпленка на кости</label>
          </li>
          <li className="filter__item">
            <input className="filter__checkbox visually-hidden" type="checkbox" name="" id="chicken-drumstick" />
            <label className="filter__label" htmlFor="chicken-drumstick">Голень цыпленка</label>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export { Filter };
