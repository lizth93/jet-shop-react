import Footer from "layout/Footer/footer.styled";
import Header from "layout/Header/header.styled";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
