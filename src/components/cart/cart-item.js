import Button from "components/general-button/button.styled";
import { useDispatch } from "react-redux";
import removeProduct from "store/cart/remove-product";
import addProduct from "store/cart/add-product";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, description, quantity, totalPrice, price, discount, image } =
    props.item;

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
      <div className="product-properties">
        <img src={image} alt="" className="product-img" />

        <div className="product-description">
          <div className="product-detail">
            <p>{description}</p>
            <span className="">
              ( ${price.toFixed(2)}/item ) <strong>x {quantity}</strong>
            </span>
            <span>
              with<strong> %{discount} </strong>of discount applied
            </span>
            <span>
              {" "}
              Total to pay:
              <strong className="product-total">
                {" "}
                ${totalPrice.toFixed(2)}{" "}
              </strong>{" "}
            </span>
          </div>
          <div className="btns-cart">
            <Button onClick={removeItemHandler}>-</Button>
            <Button onClick={addItemHandler}>+</Button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
