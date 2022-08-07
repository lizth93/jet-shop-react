import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

//own
import { getProducts } from "../../store/products/get-products";

export default function useInitializeProducts() {
  const dispatch = useDispatch();
  const category = useParams()?.category;
  const { search } = useLocation();

  useEffect(() => {
    if (category === "search") {
      const searchParams = new URLSearchParams(search);
      const result = searchParams?.get("q");
      dispatch(getProducts(category, "", result));
    } else {
      dispatch(getProducts(category));
    }
  }, [dispatch, category, search]);
}
