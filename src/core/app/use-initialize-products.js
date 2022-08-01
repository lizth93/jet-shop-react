import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//own
import { getProducts } from "../../store/products/get-products";

export default function useInitializeProducts() {
  const dispatch = useDispatch();
  const category = useParams()?.category;

  useEffect(() => {
    dispatch(getProducts(category));
  }, [dispatch, category]);
}
