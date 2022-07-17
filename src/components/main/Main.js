import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../store/product-slice";

//own
import Footer from "../Footer/Footer.styled";
import DetailProduct from "../Product/DetailProduct.styled";
import Product from "../Product/Product.styled";
import Spinner from "../Spinner/Spinner.styled";

const Main = (props) => {
  const dispatch = useDispatch();
  const { products, renderSpinner, productDetail } = useSelector((state) => ({
    products: state.itemsProducts.products,
    renderSpinner: state.itemsProducts.showSpinner,
    productDetail: state.itemsProducts.productDetail,
  }));

  console.log(productDetail, "this is produt detail");
  const handleOnclickProduct = (product) => {
    dispatch(productActions.setProductDetail(product));
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

        {productDetail && <DetailProduct img={productDetail.img} />}
      </section>
      <div className="control-pagination"></div>

      <Footer />
    </main>
  );
};

export default Main;
