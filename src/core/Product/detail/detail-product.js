import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
//own
import Button from "components/general-button/button.styled";
import useInitializeDetail from "./use-initialice-detail";
import Spinner from "components/spinner/spinner.styled";
import addProduct from "store/cart/add-product";
import Properties from "./properties";
import ProductImages from "./product-images";
import Error from "components/error/error.styled";
import Comments from "./post/index.styled";

const DetailProduct = (props) => {
  useInitializeDetail();
  const [actionBtn, setAction] = useState("Add to Cart");
  const dispatch = useDispatch();

  const { productDetail, isLoading, productComments, errorComments } =
    useSelector((state) => ({
      productDetail: state.itemsProducts.productDetail,
      isLoading: state.itemsProducts.isLoading,
      productComments: state.itemsProducts.productComments,
      errorComments: state.itemsProducts.errorComments,
    }));

  const handleAddToCart = () => {
    dispatch(addProduct(productDetail));

    setAction("Added!");
    setTimeout(() => {
      setAction("Add to Cart");
    }, 1000);
  };

  if (isLoading) {
    return <Spinner />;
  }

  const shouldShowProduct = !isLoading && productDetail;

  return (
    <div className={props.className}>
      {!isLoading && !productDetail && (
        <Error>Error loading detail product, Please Try Again</Error>
      )}
      {shouldShowProduct && (
        <div className="container detail-section">
          <a className="preview-link" href="/">
            &nbsp;
          </a>
          <div className="grid--3-cols">
            <ProductImages />
            <Properties>
              <Button onClick={handleAddToCart}>{actionBtn}</Button>
            </Properties>
          </div>
        </div>
      )}
      {errorComments && (
        <Error>Error loading comments of product, Please Try Again</Error>
      )}
      {productComments && !errorComments && <Comments />}
    </div>
  );
};

export default DetailProduct;