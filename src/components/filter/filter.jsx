const Filter = () => {
  return (
    <aside>
      <section className="filter">
        <h2 className="filter__heading">Выберите продукты</h2>
        <form>
          <ul className="filter__list list-reset">
            <li className="filter__item">
              <input className="filter__checkbox visually-hidden" type="checkbox" name="chicken-thigh-fillet" value="chicken-thigh-fillet" id="chicken-thigh-fillet" />
              <label className="filter__label" htmlFor="chicken-thigh-fillet">Филе бедра цыплёнка</label>
            </li>
            <li className="filter__item">
              <input className="filter__checkbox visually-hidden" type="checkbox" name="goose-thigh-fillet" value="goose-thigh-fillet" id="goose-thigh-fillet" />
              <label className="filter__label" htmlFor="goose-thigh-fillet">Филе бедра гуся</label>
            </li>
            <li className="filter__item">
              <input className="filter__checkbox visually-hidden" type="checkbox" name="beef-thigh-flesh" value="beef-thigh-flesh" id="beef-thigh-flesh" />
              <label className="filter__label" htmlFor="beef-thigh-flesh">Мякоть бедра говяжья</label>
            </li>
            <li className="filter__item">
              <input className="filter__checkbox visually-hidden" type="checkbox" name="chicken-breast-on-the-bone" value="chicken-breast-on-the-bone" id="chicken-breast-on-the-bone" />
              <label className="filter__label" htmlFor="chicken-breast-on-the-bone">Грудка цыпленка на кости</label>
            </li>
            <li className="filter__item">
              <input className="filter__checkbox visually-hidden" type="checkbox" name="chicken-drumstick" value="chicken-drumstick" id="chicken-drumstick" />
              <label className="filter__label" htmlFor="chicken-drumstick">Голень цыпленка</label>
            </li>
          </ul>
        </form>
      </section>
    </aside>
  );
};

export { Filter };
