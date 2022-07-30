import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "store/cart/cart-slice";

export default function useGetItemsCart() {
  const dispatch = useDispatch();
  let itemsCart = JSON.parse(localStorage.getItem("cartItems"));

  useEffect(() => {
    if (!itemsCart) return;

    dispatch(
      cartActions.replaceCart({
        items: itemsCart,
      })
    );
  }, [dispatch, itemsCart]);
}
