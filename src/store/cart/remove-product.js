import { cloneDeep } from "lodash";
import { cartActions } from "./cart-slice";
export default function removeProduct(productData) {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().cartItems);
    const existProduct = state.items.find(
      (product) => product.id === productData.id
    );

    if (existProduct.quantity === 1) {
      state.items = state.items.filter((item) => item.id !== productData.id);
    } else {
      existProduct.quantity--;
      existProduct.totalPrice = existProduct.totalPrice - existProduct.price;
    }

    dispatch(cartActions.removeItemToCart());
    dispatch(cartActions.replaceCart({ items: state.items }));
    dispatch(cartActions.saveItemsTemporaly());
  };
}
