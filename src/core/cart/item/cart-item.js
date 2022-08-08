import CartItemsProperties from "./properties";

const CartItem = (props) => {
  return (
    <li className={props.className}>
      <header>
        <h3 className="product-title">{props.item.title}</h3>
      </header>

      <CartItemsProperties items={props.item}>
        {props.children}
      </CartItemsProperties>
    </li>
  );
};
export default CartItem;
