import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//own
import Button from "components/general-button/button.styled";
import useInitializeDetail from "./use-initialice-detail";
import Spinner from "components/Spinner/spinner.styled";
import addProduct from "store/cart/add-product";
import Properties from "./properties";

const DetailProduct = (props) => {
  useInitializeDetail();
  const dispatch = useDispatch();

  const { productDetail, isLoading } = useSelector((state) => ({
    productDetail: state.itemsProducts.productDetail,
    isLoading: state.itemsProducts.isLoading,
  }));

  const [imageDetail, setImageDetail] = useState("");

  if (isLoading) {
    return <Spinner />;
  }

  const handlerClickImg = (x) => {
    setImageDetail(x);
  };

  const handleAddToCart = () => {
    dispatch(addProduct(productDetail));
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
          <Properties>
            <Button onClick={handleAddToCart}>Add a Cart</Button>
          </Properties>

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
