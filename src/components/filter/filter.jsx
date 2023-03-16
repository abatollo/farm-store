import { products } from "../../mocks/products";

const Filter = () => {
  return (
    <aside>
      <section className="filter">
        <h2 className="filter__heading">Выберите продукты</h2>
        <form>
          <ul className="filter__list list-reset">
            { 
              products.map((product) => 
                <li className="filter__item" key={product.id}>
                  <input className="filter__checkbox visually-hidden" type="checkbox" name={product.id} value={product.id} id={product.id} />
                  <label className="filter__label" htmlFor={product.id}>{product.name}</label>
                </li>
              )
            }
          </ul>
        </form>
      </section>
    </aside>
  );
};

export { Filter };
