import { useEffect } from "react";
import { useDispatch } from "react-redux";

//own
import { getProducts } from "../store/products/get-products";

export default function useInitializeProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts("all"));
  }, [dispatch]);
}
