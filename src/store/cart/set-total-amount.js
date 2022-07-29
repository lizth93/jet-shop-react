import { cloneDeep } from "lodash";
import { cartActions } from "./cart-slice";

export default function setTotalAmount() {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().cartItems);
    let totalAmount = 0;

    state.items.map((item) => (totalAmount = totalAmount + item.totalPrice));

    dispatch(cartActions.setTotalAmount(totalAmount));
  };
}
