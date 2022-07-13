import Logo from "./Logo";

const Footer = (props) => {
  return (
    <footer className={props.className}>
      <div className="container grid grid--5-cols">
        <Logo />
        <div>
          <h2 className="heading--2">Know us</h2>
        </div>
        <div>
          <h2 className="heading--2">Services</h2>
        </div>
        <div>
          <h2 className="heading--2">My account</h2>
        </div>
        <div>
          <h2 className="heading--2">Contact Us</h2>
        </div>
        <p className="copyrigth">
          This website is handmade by Luz Edith Tobar ❤ with JavaScript, html
          and css, Check the code of this website on GitHub.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
