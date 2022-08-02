import CartItemsProperties from "./properties";

const CartItem = (props) => {
  const { title, description, quantity, totalPrice, price, discount, image } =
    props.item;

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
        {props.children}
      </CartItemsProperties>
    </li>
  );
};
export default CartItem;
