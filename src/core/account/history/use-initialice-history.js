import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsHistory } from "store/cart/history/get-products";

export default function useInitialiceHistory(nickname) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsHistory(nickname));
  }, [dispatch, nickname]);
}
