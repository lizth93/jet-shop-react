import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "store/cart/cart-slice";

export default function useGetItemsCart() {
  const dispatch = useDispatch();
  const itemsCart = JSON.parse(localStorage.getItem("cartItems"));

  useEffect(() => {
    if (itemsCart) {
      dispatch(
        cartActions.replaceCart({
          items: itemsCart,
        })
      );
    }
  }, [dispatch, itemsCart]);
}
