const NavigationIcons = (props) => {
  return (
    <nav className={props.className}>
      <ul className="main-nav-list">
        <li>
          <a className="main-nav-link" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="btn-icon-1 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Log in
          </a>
        </li>
        <li>
          <a className="main-nav-link" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="btn-icon-1 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationIcons;
