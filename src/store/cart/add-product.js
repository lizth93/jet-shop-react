import { cloneDeep } from "lodash";
import { cartActions } from "./cart-slice";

export default function addProduct(productData) {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().cartItems);
    const existProduct = state.items.find(
      (product) => product.id === productData.id
    );
    // let totalAmount;
    if (!existProduct) {
      state.items.push({
        id: productData.id,
        title: productData.title,
        description: productData.description,
        quantity: 1,
        price: productData.price,
        totalPrice: productData.price,
        image: productData.img,
        discount: productData.discount,
      });
    } else {
      existProduct.quantity++;
      existProduct.totalPrice = existProduct.totalPrice + productData.price;

      // totalAmount = totalAmount + existProduct.totalPrice;
    }
    // dispatch(cartActions.setTotalQuantity(totalAmount));

    dispatch(cartActions.addItemToCart());
    dispatch(
      cartActions.replaceCart({
        items: state.items,
        // totalAmount: totalAmount,
      })
    );
  };
}
