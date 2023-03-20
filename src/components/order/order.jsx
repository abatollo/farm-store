import { connect } from "react-redux";

import { formatPrice } from "../../utils/format-price";

const Order = ({ 
  overallCost 
}) => {
  return (
    <section className="order">
      <form action="https://echo.htmlacademy.ru/">
        <h2 className="order__heading">Сделать заказ</h2>
        <input className="order__address-input" placeholder="Введите адрес доставки" id="address" name="address" type="text" />
        <h3 className="order__subheading">Цена</h3>
        <div className="order__price">{ formatPrice(overallCost) }</div>
        <button className="order__button button" type="submit">Купить</button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    overallCost: state.overallCost
  };
};

export default connect(mapStateToProps, null)(Order);
