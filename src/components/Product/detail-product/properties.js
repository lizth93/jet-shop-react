import { useSelector } from "react-redux";
//own
import PropertiesProduct from "../properties-product";
import { useProperties } from "../properties";

const Properties = (props) => {
  const { productDetail } = useSelector((state) => ({
    productDetail: state.itemsProducts.productDetail,
  }));

  console.log(productDetail, "productDetail");

  const properties = useProperties(productDetail);
  return (
    <div className="detail-product">
      <h2 className="heading--2">Product Description:</h2>
      <ul className="product__description-list">
        {properties.map((property) => (
          <PropertiesProduct
            key={property.title}
            name={property.title}
            value={property.value}
          ></PropertiesProduct>
        ))}

        <label className="discount-detail" htmlFor="discount">
          With <strong>discount product: </strong>
          <span> {productDetail.discountPercentage}%</span>
        </label>
      </ul>
      <p className="product-price-detail">
        <span>$</span>
        <strong>{productDetail.price}</strong>
      </p>
      {props.children}
    </div>
  );
};
export default Properties;
