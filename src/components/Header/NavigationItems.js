const NavigationItems = (props) => {
  const navigationItems = [
    "Smartphones",
    "Laptops",
    "Skincare",
    "Fragances",
    "Groseries",
    "All Products",
  ];

  return (
    <nav className={props.className}>
      <ul className="main-nav-list-2">
        {navigationItems.map((item) => (
          <li key={item}>
            <a className="main-nav-link" href={`/${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationItems;
