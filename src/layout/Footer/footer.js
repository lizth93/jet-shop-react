import Logo from "layout/logo";
import Heading from "./headings";

const Footer = (props) => {
  return (
    <footer className={props.className}>
      <div className="container grid grid--5-cols">
        <Logo />
        <Heading>Know us</Heading>
        <Heading>Services</Heading>
        <Heading>My account</Heading>
        <Heading>Contact us</Heading>

        <p className="copyrigth">
          This website is handmade by Luz Edith Tobar ❤ with JavaScript, html
          and css, Check the code of this website on GitHub.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
