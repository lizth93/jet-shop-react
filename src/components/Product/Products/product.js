import { Link } from "react-router-dom";
//own
import PropertiesProduct from "../properties-product";
import { useProperties } from "../properties";

const Product = (props) => {
  const properties = useProperties(props);

  const handlerClickProduct = (e) => {
    e.preventDefault();
    props.onClickProduct(properties);
  };
  return (
    <div className={props.className}>
      <div className="container section_product-ppal">
        <div className="target-product" onClick={handlerClickProduct}>
          <Link className="preview-link" to={`/products-detail/${props.id}`}>
            <figure className="product__fig">
              <img src={props.img} alt="product" className="product__img" />
            </figure>
            <h1 className="product__title">
              <span>{props.title}</span>
            </h1>

            <div className="descriptions-product">
              <h2 className="heading--2">Product Description:</h2>
              <ul className="product__description-list">
                {properties.map((property) => (
                  <PropertiesProduct
                    key={property.title}
                    name={property.title}
                    value={property.value}
                  ></PropertiesProduct>
                ))}

                <label className="discount" htmlFor="discount">
                  With <strong>discount </strong>of discount:
                  <span> {props.discount} %</span>
                </label>
              </ul>
              <p className="product-price">
                <span>$</span>
                <strong>{props.price}</strong>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
