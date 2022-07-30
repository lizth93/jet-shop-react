import cloneDeep from "lodash.clonedeep";
import { cartActions } from "./cart-slice";

export default function setTotalQuantity() {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().cartItems);
    let totalQuantity = 0;

    state.items.map((item) => (totalQuantity = totalQuantity + item.quantity));

    dispatch(cartActions.setTotalQuantity(totalQuantity));
  };
}
