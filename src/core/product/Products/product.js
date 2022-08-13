import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//own
import PropertiesProduct from "../properties-product";
import { useProperties } from "../properties";
import { PRODUCT } from "config";
import Button from "components/general-button/button.styled";
import addProduct from "store/cart/add-product";

const Product = (props) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => ({
    isLoading: state.itemsProducts.isLoading,
  }));

  const properties = useProperties(props.product);
  const history = useHistory();
  const [actionBtn, setAction] = useState("Add to Cart");

  const handleClickOnProduct = () => {
    history.push(`${PRODUCT}/${props.product.id}`);
  };

  const handleAddToCart = () => {
    dispatch(addProduct(props.product));
    setAction("Added!");
    setTimeout(() => {
      setAction("Add to Cart");
    }, 1000);
  };

  return (
    <>
      <div className={props.className}>
        <div className="container section_product-ppal">
          {!isLoading && (
            <div className="target-product">
              <div className="preview-link" onClick={handleClickOnProduct}>
                <figure className="product__fig">
                  <img
                    src={props.product.thumbnail}
                    alt="product"
                    className="product__img"
                  />
                </figure>
                <h1 className="product__title">
                  <span>{props.product.title}</span>
                </h1>

                <div className="descriptions-product">
                  <h2 className="heading--2">Product Description:</h2>
                  <ul className="product__description-list">
                    {properties.map((property) => (
                      <PropertiesProduct
                        key={property.title}
                        name={property.title}
                        value={property.value}
                      />
                    ))}

                    <label className="discount" htmlFor="discount">
                      With <strong>discount </strong>of:
                      <span> {props.product.discountPercentage} %</span>
                    </label>
                  </ul>
                  <p className="product-price">
                    <span>$</span>
                    <strong>{props.product.price}</strong>
                  </p>
                </div>
              </div>
              <Button className="add-cart" onClick={handleAddToCart}>
                {actionBtn}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
