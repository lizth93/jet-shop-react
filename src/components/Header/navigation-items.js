import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//own
import { CATEGORIES } from "../../config";
import { paginationActions } from "../../store/pagination/pagination-slice";

const NavigationItems = (props) => {
  const dispatch = useDispatch();

  const handleClickCategory = (item) => {
    dispatch(paginationActions.setSkipPages(0));
    dispatch(paginationActions.setCurrentPage(1));
    dispatch(paginationActions.calculatePages());
    // dispatch(getProducts(item));
  };
  return (
    <nav className={props.className}>
      <ul className="main-nav-list-2">
        {Object.keys(CATEGORIES).map((item) => (
          <li key={item}>
            <Link
              className="main-nav-link"
              to={`/products/${item.toLowerCase()}`}
              onClick={() => {
                handleClickCategory(item.toLocaleLowerCase());
              }}
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
