import Logo from "layout/logo";
import ContactMe from "./contact-me";
import Heading from "./headings";

const Footer = (props) => {
  return (
    <div>
      <footer className={props.className}>
        <div className="container grid--4-cols">
          <Logo />
          <div>
            <Heading>About me</Heading>
            <p className="text">Front-end developer</p>
          </div>
          <div>
            <Heading>Services</Heading>
            <p className="text">JavaScript, CSS, SCSS,HTML,React, Redux,Git</p>
          </div>
          <div>
            <Heading>Contact me</Heading>
            <ContactMe />
          </div>

          <p className="copyrigth">
            This website is handmade by Luz Edith Tobar ❤ with JavaScript,
            REACT, Redux, html and CSS, SCSS, Check the code of this website on
            GitHub.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
