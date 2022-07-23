import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

//own
import Footer from "../Footer/footer.styled";
import ButtonPagination from "../pagination/button.styled";
import DetailProduct from "../Product/detail-product/detail-product.styled";
import Product from "../Product/Products/product.styled";
import Spinner from "../Spinner/spinner.styled";
import { paginationActions } from "../../store/pagination-slice";
import { productActions } from "../../store/product-slice";
import { getProducts } from "../../store/get-products";
import { getBySearchTerm } from "../../store/search";

const Main = (props) => {
  const dispatch = useDispatch();
  const searchProduct = useSelector(
    (state) => state.itemsProducts.searchProduct
  );
  const { products, renderSpinner, productDetail } = useSelector((state) => ({
    products: state.itemsProducts.products,
    renderSpinner: state.itemsProducts.showSpinner,
    productDetail: state.itemsProducts.productDetail,
  }));

  const handleOnclickProduct = (product) => {
    dispatch(productActions.setProductDetail(product));
  };
  const handleClickBtnPage = (currentPage, params, skip) => {
    dispatch(paginationActions.setCurrentPage(currentPage));
    if (params.category === "search") {
      console.log(searchProduct, "search");
      dispatch(getBySearchTerm(searchProduct, skip));
    } else {
      dispatch(getProducts(params.category, skip));
    }
  };
  return (
    <Switch>
      <main className={props.className}>
        <section className="section-products">
          {renderSpinner && <Spinner />}

          {!renderSpinner &&
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
          {productDetail && (
            <Route path="/products-detail/:productId" exact>
              <DetailProduct img={productDetail.img} />
            </Route>
          )}
        </section>
        <div className="control-pagination">
          <ButtonPagination onClickPag={handleClickBtnPage} />
        </div>
        <Footer />
      </main>
    </Switch>
  );
};

export default Main;
