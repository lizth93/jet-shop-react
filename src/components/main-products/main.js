import { useSelector, useDispatch } from "react-redux";

//own
import ButtonPagination from "../pagination/button.styled";
import Product from "../../core/product/products/product.styled";
import Spinner from "../spinner/spinner.styled";
import { paginationActions } from "../../store/pagination/pagination-slice";
import { getProducts } from "../../store/products/get-products";
import useInitializeProducts from "../../core/app/use-initialize-products";
import Error from "components/error/error.styled";

const Main = (props) => {
  useInitializeProducts();

  const dispatch = useDispatch();

  const { products, searchProduct, isLoading, generalError } = useSelector(
    (state) => ({
      products: state.itemsProducts.products,
      searchProduct: state.itemsProducts.searchProduct,
      isLoading: state.itemsProducts.isLoading,
      generalError: state.itemsProducts.generalError,
    })
  );

  if (isLoading) return <Spinner />;

  const handleClickBtnPage = (currentPage, params, skip) => {
    dispatch(paginationActions.setCurrentPage(currentPage));

    dispatch(getProducts(params.category, skip, searchProduct));
  };

  return (
    <div>
      <main className={props.className}>
        <section className="section-products">
          {generalError && !isLoading && <Error>{generalError}</Error>}
          {isLoading && !generalError && <Spinner />}

          {!isLoading &&
            !generalError &&
            products.length !== 0 &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </section>

        <div className="control-pagination">
          {!generalError && (
            <ButtonPagination onClickPag={handleClickBtnPage} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Main;
