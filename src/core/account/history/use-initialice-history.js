import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsHistory } from "store/cart/history/get-products";

export default function useInitialiceHistory(email) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!email) return;
    dispatch(getProductsHistory(email));
  }, [dispatch, email]);
}
