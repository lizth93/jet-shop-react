import { useState } from "react";
import { useSelector } from "react-redux";

//own
import PropertiesProduct from "../properties-product";
import { useProperties } from "../properties";
import Button from "../../pagination/general-button/button.styled";
import useInitializeDetail from "./use-initialice-detail";
import Spinner from "components/Spinner/spinner.styled";

const DetailProduct = (props) => {
  useInitializeDetail();

  const { productDetail, isLoading } = useSelector((state) => ({
    productDetail: state.itemsProducts.productDetail,
    isLoading: state.itemsProducts.isLoading,
  }));

  const [imageDetail, setImageDetail] = useState("");

  const properties = useProperties(productDetail);

  if (isLoading) {
    return <Spinner />;
  }

  const handlerClickImg = (x) => {
    setImageDetail(x);
  };

  return (
    <div className={props.className}>
      <div className="container detail-section">
        <a className="preview-link" href="/">
          &nbsp;
        </a>
        <div className="grid--3-cols">
          <div className="small-images">
            {productDetail.images.map((x) => (
              <img
                key={x}
                className="img-small"
                src={x}
                alt=""
                onClick={() => {
                  handlerClickImg(x);
                }}
              />
            ))}
          </div>
          <div>
            <figure className="product_fig_detail">
              <img src={imageDetail} alt="" className="product__img" />

              <h1 className="product__title">
                <span>{productDetail.title}</span>
              </h1>
            </figure>
          </div>
          <div>
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
                  With <strong>discount product </strong>of discount:{" "}
                  <span>{productDetail.discount}%</span>
                </label>
              </ul>
              <p className="product-price-detail">
                <span>$</span>
                <strong>{productDetail.price}</strong>
              </p>
              <Button>Add a Cart</Button>
            </div>
          </div>

          <div className="comments">
            <h2 className="heading--2">Comments</h2>

            <p>BODY TO comments by User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
