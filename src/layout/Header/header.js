import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//own
import NavigationIcons from "./navigation-icons.styled";
import NavigationItems from "./navigation-items";
import SearchForm from "./search-form.styled";
import Logo from "layout/logo";
import BtnMobileNavigation from "./btn-mobile.styled";
import CloseIcon from "Icons/close";
import MobileNavIcon from "Icons/mobile-nav";

const Header = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  const category = useParams();
  useEffect(() => {
    if (category) {
      setNavOpen(false);
    }
  }, [category]);

  const handleMobileNavigation = () => {
    setNavOpen(true);
  };

  const handleCloseNavigation = () => {
    setNavOpen(false);
  };
  let classNames = "";

  if (navOpen) {
    classNames = "nav-open";
  }

  return (
    <div className={props.className}>
      <header className={classNames}>
        <div className="header">
          <Logo />
          <SearchForm />
          <NavigationIcons />
        </div>
        <NavigationItems />

        <BtnMobileNavigation>
          {!navOpen && <MobileNavIcon onClick={handleMobileNavigation} />}
          {navOpen && <CloseIcon onClick={handleCloseNavigation} />}
        </BtnMobileNavigation>
      </header>
    </div>
  );
};

export default Header;
