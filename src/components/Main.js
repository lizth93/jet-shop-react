import Footer from "./Footer/Footer.styled";
import Product from "./Product/Product.styled";

const Main = (props) => {
  return (
    <main className={props.className}>
      <section className="section-products">
        <Product />
        <Product />
        <Product />
      </section>
      <div className="control-pagination"></div>

      <Footer />
    </main>
  );
};

export default Main;
