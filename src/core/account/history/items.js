import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//own
import CartItem from "core/cart/item/cart-item.styled";
import Spinner from "components/Spinner/spinner.styled";
import useInitialiceHistory from "./use-initialice-history";
import Error from "components/error/error.styled";

const HistoryItems = (props) => {
  const history = useHistory();
  const { items, isLoading, email, token } = useSelector((state) => ({
    items: state.historyItems.items,
    isLoading: state.historyItems.isLoading,
    email: state.itemsAuth.email,
    token: state.itemsAuth.token,
  }));

  useInitialiceHistory(email);

  if (!token) {
    history.push("/auth");
  }

  console.log(items, "what itrems have");

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={props.className}>
      <h2 className="title-history">Shopping history</h2>

      <ul>
        {items.length === 0 && (
          <Error>There are no products purchased yet</Error>
        )}
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default HistoryItems;
