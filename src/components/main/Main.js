import { useSelector, useDispatch } from "react-redux";

//own
import ButtonPagination from "../pagination/button.styled";
import Product from "../Product/Products/product.styled";
import Spinner from "../Spinner/spinner.styled";
import { paginationActions } from "../../store/pagination/pagination-slice";
import { productActions } from "store/products/product-slice";
import { getProducts } from "../../store/products/get-products";
import { getBySearchTerm } from "../../store/products/search";
import useInitializeProducts from "../../app/use-initialize-products";

const Main = (props) => {
  useInitializeProducts();
  const dispatch = useDispatch();
  const searchProduct = useSelector(
    (state) => state.itemsProducts.searchProduct
  );
  const { products, renderSpinner } = useSelector((state) => ({
    products: state.itemsProducts.products,
    renderSpinner: state.itemsProducts.showSpinner,
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
      </section>

      <div className="control-pagination">
        <ButtonPagination onClickPag={handleClickBtnPage} />
      </div>
    </main>
  );
};

export default Main;
