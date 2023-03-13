import { useState } from "react";

const Product = () => {
  const [tab, setTab] = useState('description');

  const onProductItemClick = (evt) => {
    setTab(evt.target.value);
  };

  return (
    <li className="product">
      <picture className="product__picture">
        <img className="product__image" src="img/chicken-thigh-fillet.jpg" width="248" height="248" alt="" />
      </picture>
      <h3 className="product__heading">Филе бедра цыплёнка</h3>
      <ul className="product__list list-reset">
        <li className="product__item">
          <input className="product__item-radio visually-hidden" type="radio" name="product" id="product-description" value="description" onClick={onProductItemClick} />
          <label className="product__item-label" htmlFor="product-description">Описание</label>
        </li>
        <li className="product__item">
          <input className="product__item-radio visually-hidden" type="radio" name="product" id="product-specifications" value="specifications" onClick={onProductItemClick} />
          <label className="product__item-label" htmlFor="product-specifications">Характеристики</label>
        </li>
        <li className="product__item">
          <input className="product__item-radio visually-hidden" type="radio" name="product" id="product-properties" value="properties" onClick={onProductItemClick} />
          <label className="product__item-label" htmlFor="product-properties">Свойства</label>
        </li>
      </ul>
      {tab === 'description' && 
        <>
          <p className="product__description">Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.</p>
          <div className="product__price">400 руб. / 700 гр.</div>
        </>
      }
      {tab === 'specifications' && 
        <ul className="product__description list-reset">
          <li><b>Масса:</b> 0,7 кг. (595-805 г.).</li>
          <li><b>Срок годности:</b> 6 суток</li>
          <li><b>Порода:</b> КОББ 500.</li>
          <li><b>Срок годности:</b> 6 суток.</li>
          <li><b>Место происхождения:</b> Тверская область</li>
        </ul>
      }
      {tab === 'properties' && 
        <ul className="product__description list-reset">
          <li><b>Энергетическая ценность:</b> 135 ккал./565 кДж.</li>
          <li><b>Пищевая ценность:</b> белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.</li>
        </ul>
      }
    </li>
  );
};

export { Product };
