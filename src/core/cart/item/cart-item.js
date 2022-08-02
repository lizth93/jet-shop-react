import Button from "components/general-button/button.styled";
import { useDispatch } from "react-redux";
import removeProduct from "store/cart/remove-product";
import addProduct from "store/cart/add-product";
import CartItemsProperties from "./properties";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, description, quantity, totalPrice, price, discount, image } =
    props.item;

  console.log(price);

  const removeItemHandler = () => {
    dispatch(removeProduct(props.item));
  };
  const addItemHandler = () => {
    dispatch(addProduct(props.item));
  };
  return (
    <li className={props.className}>
      <header>
        <h3 className="product-title">{title}</h3>
      </header>

      <CartItemsProperties
        item={{
          title,
          description,
          quantity,
          totalPrice,
          price,
          discount,
          image,
        }}
      >
        <Button onClick={removeItemHandler}>-</Button>
        <Button onClick={addItemHandler}>+</Button>
      </CartItemsProperties>
    </li>
  );
};
export default CartItem;
