import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//own
import { getDetail } from "store/products/get-product-detail";

export default function useInitializeDetail() {
  const dispatch = useDispatch();
  const productId = useParams()?.productId;

  useEffect(() => {
    dispatch(getDetail(productId));
  }, [dispatch, productId]);
}
