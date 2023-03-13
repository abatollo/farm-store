import { Filter } from "../filter/filter";
import { Product } from "../product/product";
import { Order } from "../order/order";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__wrapper container center">
        <div className="shop__aside">
          <Filter />
          <Order />
        </div>
        <main className="shop__list-wrapper">
          <ul className="list-reset">
            <Product />
          </ul>
        </main>
      </div>
    </div>
  );
};

export { Shop };
