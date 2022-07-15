import { useSelector } from "react-redux";

//own
import Footer from "../Footer/Footer.styled";
import Product from "../Product/Product.styled";
import Spinner from "../Spinner/Spinner.styled";

const Main = (props) => {
  const { products, renderSpinner } = useSelector((state) => ({
    products: state.itemsProducts.products,
    renderSpinner: state.itemsProducts.showSpinner,
  }));

  console.log("spiner have", renderSpinner);
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
            />
          ))}
      </section>
      <div className="control-pagination"></div>

      <Footer />
    </main>
  );
};

export default Main;
