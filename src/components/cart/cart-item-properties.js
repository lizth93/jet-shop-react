const CartItemsProperties = (props) => {
  const { description, quantity, totalPrice, price, discount, image } =
    props.item;

  return (
    <div className="product-properties">
      <img src={image} alt="" className="product-img" />

      <div className="product-description">
        <div className="product-detail">
          <p>{description}</p>
          <span>
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
        <div className="btns-cart">{props.children}</div>
      </div>
    </div>
  );
};

export default CartItemsProperties;
