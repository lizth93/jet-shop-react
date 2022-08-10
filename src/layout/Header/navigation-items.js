import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//own
import { CATEGORIES } from "../../config";
import { paginationActions } from "../../store/pagination/pagination-slice";
import calculatePages from "store/pagination/calculate-pages";

const NavigationItems = (props) => {
  const dispatch = useDispatch();

  const handleClickCategory = () => {
    dispatch(paginationActions.setSkipPages(0));
    dispatch(paginationActions.setCurrentPage(1));
    dispatch(calculatePages());
  };
  return (
    <div className={props.className}>
      <nav className="main-nav">
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
    </div>
  );
};

export default NavigationItems;
