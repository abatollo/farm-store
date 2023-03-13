const Order = () => {
  return (
    <section className="order">
      <h2 className="order__heading">Сделать заказ</h2>
      <input className="order__address-input" placeholder="Введите адрес доставки" type="text" />
      <h3 className="order__subheading">Цена</h3>
      <div className="order__price">1 200 руб.</div>
      <button className="order__button button" type="submit">Купить</button>
    </section>
  );
};

export { Order };
