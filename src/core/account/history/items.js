import { useSelector } from "react-redux";
//own
import CartItem from "core/cart/item/cart-item.styled";
import Spinner from "components/Spinner/spinner.styled";
import useInitialiceHistory from "./use-initialice-history";

const HistoryItems = (props) => {
  const { items, isLoading, email } = useSelector((state) => ({
    items: state.historyItems.items,
    isLoading: state.historyItems.isLoading,
    email: state.itemsAuth.email,
  }));

  useInitialiceHistory(email);

  if (!items) return;
  console.log(items, "itemsjs");
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={props.className}>
      <h2 className="title-history">Shopping history</h2>

      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              description: item.description,
              quantity: item.quantity,
              price: item.price,
              totalPrice: item.totalPrice,
              image: item.image,
              discount: item.discount,
            }}
          />
        ))}
      </ul>
    </div>
  );
};
export default HistoryItems;
