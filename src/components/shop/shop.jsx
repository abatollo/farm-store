import Filter from "../filter/filter";
import { Product } from "../product/product";
import Order from "../order/order";

import { products } from "../../mocks/products";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__wrapper container center">
        <div className="shop__aside">
          <Filter />
          <Order />
        </div>
        <main className="shop__list-wrapper">
          <ul className="shop__list list-reset">
            { 
              products.map((product) => 
                <Product product={product} key={product.id} />
              )
            }
          </ul>
        </main>
      </div>
    </div>
  );
};

export { Shop };
