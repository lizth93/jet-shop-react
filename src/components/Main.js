import { useSelector } from "react-redux";
import Footer from "./Footer/Footer.styled";
import Product from "./Product/Product.styled";

const Main = (props) => {
  const { products } = useSelector((state) => ({
    products: state.itemsProducts.products,
  }));

  return (
    <main className={props.className}>
      <section className="section-products">
        {products.map((product) => (
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
