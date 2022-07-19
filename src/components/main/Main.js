import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { productActions } from "../../store/product-slice";

//own
import Footer from "../Footer/Footer.styled";
import DetailProduct from "../Product/detail-product/DetailProduct.styled";
import Product from "../Product/product/Product.styled";
import Spinner from "../Spinner/Spinner.styled";

const Main = (props) => {
  const dispatch = useDispatch();
  const { products, renderSpinner, productDetail } = useSelector((state) => ({
    products: state.itemsProducts.products,
    renderSpinner: state.itemsProducts.showSpinner,
    productDetail: state.itemsProducts.productDetail,
  }));

  const handleOnclickProduct = (product) => {
    dispatch(productActions.setProductDetail(product));
  };
  return (
    <main className={props.className}>
      <section className="section-products">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products/all" />
          </Route>
          <Route path="/products/:category" exact>
            {renderSpinner && <Spinner />}
            {!renderSpinner &&
              !productDetail &&
              products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  stock={product.stock}
                  brand={product.brand}
                  discount={product.discountPercentage}
                  img={product.thumbnail}
                  onClickProduct={() => {
                    handleOnclickProduct({
                      id: product.id,
                      title: product.title,
                      description: product.description,
                      price: product.price,
                      stock: product.stock,
                      brand: product.brand,
                      discount: product.discountPercentage,
                      images: product.images,
                      img: product.thumbnail,
                    });
                  }}
                />
              ))}
          </Route>
          {productDetail && (
            <Route path="/products-detail/:productId" exact>
              <DetailProduct img={productDetail.img} />
            </Route>
          )}
        </Switch>
      </section>
      <div className="control-pagination"></div>

      <Footer />
    </main>
  );
};

export default Main;
