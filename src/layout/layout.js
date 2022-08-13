import Footer from "layout/footer/footer.styled";
import Header from "layout/header/header.styled";

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
