import NavigationIcons from "./navigation-icons.styled";
import NavigationItems from "./navigation-items.styled";
import SearchForm from "./search-form.styled";
import Logo from "components/layout/logo";

const Header = (props) => {
  return (
    <header className={props.className}>
      <div className="header">
        <Logo />
        <SearchForm />
        <NavigationIcons />
      </div>
      <NavigationItems />
    </header>
  );
};

export default Header;
