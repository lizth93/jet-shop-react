import Footer from "components/Footer/footer.styled";
import Header from "components/Header/header.styled";

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
