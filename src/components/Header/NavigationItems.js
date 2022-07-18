import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//own
import { CATEGORIES } from "../Product/config";
import { getProducts } from "../../store/get-products";
import { productActions } from "../../store/product-slice";

const NavigationItems = (props) => {
  const dispatch = useDispatch();

  const handleClickCategory = (item) => {
    dispatch(getProducts(item));
    dispatch(productActions.renderSpinner());
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
