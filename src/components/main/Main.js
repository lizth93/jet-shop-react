import { useSelector, useDispatch } from "react-redux";

//own
import ButtonPagination from "../pagination/button.styled";
import Product from "../../core/Product/Products/product.styled";
import Spinner from "../Spinner/spinner.styled";
import { paginationActions } from "../../store/pagination/pagination-slice";
import { getProducts } from "../../store/products/get-products";
import useInitializeProducts from "../../core/app/use-initialize-products";

const Main = (props) => {
  useInitializeProducts();

  const dispatch = useDispatch();

  const { products, renderSpinner, searchProduct, isLoading } = useSelector(
    (state) => ({
      products: state.itemsProducts.products,
      renderSpinner: state.itemsProducts.showSpinner,
      searchProduct: state.itemsProducts.searchProduct,
      isLoading: state.itemsProducts.isLoading,
    })
  );

  if (isLoading) return <Spinner />;

  const handleClickBtnPage = (currentPage, params, skip) => {
    dispatch(paginationActions.setCurrentPage(currentPage));

    dispatch(getProducts(params.category, skip, searchProduct));
  };

  return (
    <main className={props.className}>
      <section className="section-products">
        {renderSpinner && <Spinner />}

        {!renderSpinner &&
          products.length !== 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </section>

      <div className="control-pagination">
        <ButtonPagination onClickPag={handleClickBtnPage} />
      </div>
    </main>
  );
};

export default Main;
