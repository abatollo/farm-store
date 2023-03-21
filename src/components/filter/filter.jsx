import { products } from '../../mocks/products.json';

import { connect } from 'react-redux';

import { ActionCreator } from '../../store/action';

const Filter = ({ 
  addToBasket, 
  removeFromBasket 
}) => {

  const onFilterItemChange = (product, evt) => {
    if (evt.target.checked) {
      addToBasket(product);
    } else {
      removeFromBasket(product);
    }
  };

  return (
    <aside>
      <section className="filter">
        <h2 className="filter__heading">Выберите продукты</h2>
        <form>
          <ul className="filter__list list-reset">
            { 
              products.map((product) => 
                <li className="filter__item" key={product.id}>
                  <input className="filter__checkbox visually-hidden" type="checkbox" name={product.id} value={product.id} id={product.id} onChange={(evt) => onFilterItemChange(product, evt)}/>
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

const mapDispatchToProps = (dispatch) => ({
  addToBasket(item) {
    dispatch(ActionCreator.addToBasket(item));
  },
  removeFromBasket(item) {
    dispatch(ActionCreator.removeFromBasket(item));
  },
});

export default connect(null, mapDispatchToProps)(Filter);
