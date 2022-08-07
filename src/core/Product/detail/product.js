import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
//own
import Button from "components/general-button/button.styled";
import useInitializeDetail from "./use-initialice-detail";
import Spinner from "components/Spinner/spinner.styled";
import addProduct from "store/cart/add-product";
import Properties from "./properties";
import ProductImages from "./product-images";

const DetailProduct = (props) => {
  useInitializeDetail();
  const [actionBtn, setAction] = useState("Add to Cart");
  const dispatch = useDispatch();

  const { productDetail, isLoading } = useSelector((state) => ({
    productDetail: state.itemsProducts.productDetail,
    isLoading: state.itemsProducts.isLoading,
  }));

  if (isLoading) {
    return <Spinner />;
  }

  const handleAddToCart = () => {
    dispatch(addProduct(productDetail));

    setAction("Added!");
    setTimeout(() => {
      setAction("Add to Cart");
    }, 1000);
  };

  return (
    <div className={props.className}>
      <div className="container detail-section">
        <a className="preview-link" href="/">
          &nbsp;
        </a>
        <div className="grid--3-cols">
          <ProductImages />
          <Properties>
            <Button onClick={handleAddToCart}>{actionBtn}</Button>
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
