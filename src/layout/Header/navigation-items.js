import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//own
import { CATEGORIES } from "../../helpers";
import { paginationActions } from "../../store/pagination/pagination-slice";

const NavigationItems = (props) => {
  const dispatch = useDispatch();

  const handleClickCategory = () => {
    dispatch(paginationActions.setSkipPages(0));
    dispatch(paginationActions.setCurrentPage(1));
    dispatch(paginationActions.calculatePages());
  };
  return (
    <nav className={props.className}>
      <ul className="main-nav-list-2">
        {Object.keys(CATEGORIES).map((item) => (
          <li key={item}>
            <Link
              className="main-nav-link"
              to={`/products/${item.toLowerCase()}`}
              onClick={handleClickCategory}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationItems;
