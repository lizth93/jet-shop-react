import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//own
import PropertiesProduct from "./PropertiesProduct";

const DetailProduct = (props) => {
  const productDetail = useSelector(
    (state) => state.itemsProducts.productDetail
  );
  const params = useParams();

  console.log(params.productId);

  const [imageDetail, setImageDetail] = useState(props.img);
  if (!productDetail) return;
  const properties = [
    {
      value: productDetail.description,
      title: "Description: ",
    },
    {
      value: productDetail.brand,
      title: "Brand: ",
    },
    {
      value: productDetail.stock,
      title: "On Stock: ",
    },
    {
      value: productDetail.id,
      title: "Product Id: ",
    },
  ];

  const handlerClickImg = (x) => {
    setImageDetail(x);
  };
  const images = productDetail.images;

  return (
    <div className={props.className}>
      <div className="container detail-section">
        <a className="preview-link" href="/">
          &nbsp;
        </a>
        <div className="grid--3-cols">
          <div className="small-images">
            {images.map((x) => (
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
                <span>{props.title}</span>
              </h1>
            </figure>
          </div>
          <div>
            <div className="detail-product">
              <h2 className="heading--2">Product Description:</h2>
              <ul className="product__description-list">
                {properties.map((property) => (
                  <PropertiesProduct
                    key={property.value}
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

              <button className="btn btn-add-car">Add a Cart</button>
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
