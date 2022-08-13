import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ProductImages = () => {
  const [imageDetail, setImageDetail] = useState("");

  const { productDetail, isLoading } = useSelector((state) => ({
    productDetail: state.itemsProducts.productDetail,
    isLoading: state.itemsProducts.isLoading,
  }));

  useEffect(() => {
    if (isLoading) return;
    setImageDetail(productDetail.images[0]);
  }, [setImageDetail, productDetail, isLoading]);

  const handlerClickImg = (x) => {
    setImageDetail(x);
  };
  return (
    <>
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
      <div className="product-fig">
        <figure className="product_fig_detail">
          <img src={imageDetail} alt="" className="product__img" />

          <h1 className="product__title">
            <span>{productDetail.title}</span>
          </h1>
        </figure>
      </div>
    </>
  );
};

export default ProductImages;
