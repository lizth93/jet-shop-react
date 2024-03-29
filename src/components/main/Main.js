import { useSelector, useDispatch } from "react-redux";

//own
import ButtonPagination from "../pagination/button.styled";
import Product from "../../core/Product/Products/product.styled";
import Spinner from "../Spinner/spinner.styled";
import { paginationActions } from "../../store/pagination/pagination-slice";
import { getProducts } from "../../store/products/get-products";
import { getBySearchTerm } from "../../store/products/search";
import useInitializeProducts from "../../core/app/use-initialize-products";
import useInitialiceProductsBySearch from "layout/Header/use-products-search";

const Main = (props) => {
  useInitializeProducts();
  useInitialiceProductsBySearch();

  const dispatch = useDispatch();

  const { products, renderSpinner, searchProduct, isLoadingSearch } =
    useSelector((state) => ({
      products: state.itemsProducts.products,
      renderSpinner: state.itemsProducts.showSpinner,
      searchProduct: state.itemsProducts.searchProduct,
      isLoadingSearch: state.itemsProducts.isLoadingSearch,
    }));

  if (isLoadingSearch) return <Spinner />;

  const handleClickBtnPage = (currentPage, params, skip) => {
    dispatch(paginationActions.setCurrentPage(currentPage));

    if (params.category === "search") {
      dispatch(getBySearchTerm(searchProduct, skip));
    } else {
      dispatch(getProducts(params.category, skip));
    }
  };

  return (
    <main className={props.className}>
      <section className="section-products">
        {renderSpinner && <Spinner />}

        {!renderSpinner &&
          products.length !== 0 &&
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
            />
          ))}
      </section>

      <div className="control-pagination">
        <ButtonPagination onClickPag={handleClickBtnPage} />
      </div>
    </main>
  );
};

export default Main;
