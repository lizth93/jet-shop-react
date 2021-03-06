import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//own
import { getBySearchTerm } from "../../store/products/search";

export default function useInitialiceProductsBySearch() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const result = searchParams?.get("q");

  useEffect(() => {
    dispatch(getBySearchTerm(result));
  }, [dispatch, result]);
}
