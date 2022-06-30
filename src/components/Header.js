import NavigationIcons from "./NavigationIcons.styled";
import NavigationItems from "./NavigationItems.styled";
import SearchForm from "./SearchForm.styled";
import Logo from "./Logo";

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
