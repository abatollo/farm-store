import { useState } from "react";

const Product = ( { product } ) => {
  const [productItemOption, setProductItemOption] = useState( 'description' );

  const handleProductItemOptionChange = ( changeEvent ) => {
    setProductItemOption(changeEvent.target.value);
  };

  return (
    <li className="product">
      <picture className="product__picture">
        <img className="product__image" src={ `img/${ product.image }.jpg` } srcSet={`img/${ product.image }.jpg 1x, img/${ product.image }@2x.jpg 2x, img/${ product.image }@3x.jpg 3x, img/${ product.image }@4x.jpg 4x`} width="248" height="248" alt={ product.imageDescription } />
        {/* @1x 248 на 248
        @2x 496 на 496
        @3x 744 на 744
        @4x 992 на 992 */}
      </picture>
      <h3 className="product__heading">{ product.name }</h3>
      <form>
        <ul className="product__list list-reset">
          <li className="product__item">
            <input className="product__item-radio visually-hidden" type="radio" name="product" id={`${product.id}-product-description`} value="description" onChange={handleProductItemOptionChange} defaultChecked />
            <label className="product__item-label" htmlFor={`${product.id}-product-description`}>Описание</label>
          </li>
          <li className="product__item">
            <input className="product__item-radio visually-hidden" type="radio" name="product" id={`${product.id}-product-specifications`} value="specifications" onChange={handleProductItemOptionChange} />
            <label className="product__item-label" htmlFor={`${product.id}-product-specifications`}>Характеристики</label>
          </li>
          <li className="product__item">
            <input className="product__item-radio visually-hidden" type="radio" name="product" id={`${product.id}-product-properties`} value="properties" onChange={handleProductItemOptionChange} />
            <label className="product__item-label" htmlFor={`${product.id}-product-properties`}>Свойства</label>
          </li>
        </ul>
      </form>
      {productItemOption === 'description' && 
        <>
          <p className="product__description">{ product.description.text }</p>
          <div className="product__price">{ product.description.price } руб. / { product.specifications.weight } г</div>
        </>
      }
      {productItemOption === 'specifications' && 
        <ul className="product__description list-reset">
          <li><b>Масса:</b> { ( product.specifications.weight / 1000 ).toLocaleString('ru-RU') } кг ({ product.specifications.weightRangeFrom }—{ product.specifications.weightRangeTo } г)</li>
          <li><b>Срок годности:</b> { product.specifications.shelfLife } суток</li>
          { product.specifications.specimen && <li><b>Порода:</b> { product.specifications.specimen }</li> }
          <li><b>Место происхождения:</b> { product.specifications.placeOfOrigin }</li>
        </ul>
      }
      {productItemOption === 'properties' && 
        <ul className="product__description list-reset">
          <li><b>Энергетическая ценность:</b> { product.properties.energyValue } ккал ({ Math.round( product.properties.energyValue * 4.1868 ) } кДж)</li>
          <li><b>Пищевая ценность:</b> белки — { product.properties.nutritionalValue.protein.toLocaleString('ru-RU') } г, жиры — { product.properties.nutritionalValue.fats.toLocaleString('ru-RU') } г, углеводы — { product.properties.nutritionalValue.carbohydrates.toLocaleString('ru-RU') } г на 100 г</li>
        </ul>
      }
    </li>
  );
};

export { Product };
