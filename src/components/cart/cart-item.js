import Button from "components/general-button/button.styled";
import { useDispatch } from "react-redux";
import removeProduct from "store/cart/remove-product";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, totalPrice, price, image } = props.item;

  const removeItemHandler = () => {
    console.log("test");
    dispatch(removeProduct(props.item));
  };
  const addItemHandler = () => {
    console.log("test2");
  };
  return (
    <li className={props.className}>
      <header>
        <h3>{title}</h3>
      </header>
      <img src={image} alt="" className="product__img" />

      <div className="description-product">
        <div className="">
          ${totalPrice.toFixed(2)}
          <span className="">(${price.toFixed(2)}/item)</span>
        </div>
        x <span>{quantity}</span>
        <div className="btns-cart">
          <Button onClick={removeItemHandler}>-</Button>
          <Button onClick={addItemHandler}>+</Button>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
