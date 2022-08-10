import { useState } from "react";

//own
import NavigationIcons from "./navigation-icons.styled";
import NavigationItems from "./navigation-items.styled";
import SearchForm from "./search-form.styled";
import Logo from "layout/logo";
import BtnMobileNavigation from "./btn-mobile.styled";
import CloseIcon from "Icons/close";
import MobileNavIcon from "Icons/mobile-nav";

const Header = (props) => {
  const [navOpen, setNavOpen] = useState(true);

  const handleMobileNavigation = () => {
    setNavOpen(true);
  };

  const handleCloseNavigation = () => {
    setNavOpen(false);
  };

  return (
    <header className={props.className}>
      <div className="header">
        <Logo />
        <SearchForm />
        <NavigationIcons />
      </div>
      {navOpen && <NavigationItems />}

      <BtnMobileNavigation>
        {!navOpen && <MobileNavIcon onClick={handleMobileNavigation} />}
        {navOpen && <CloseIcon onClick={handleCloseNavigation} />}
      </BtnMobileNavigation>
    </header>
  );
};

export default Header;
