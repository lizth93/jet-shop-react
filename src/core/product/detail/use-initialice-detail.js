import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments } from "store/comments/get-comments";

//own
import { getDetail } from "store/products/get-product-detail";

export default function useInitializeDetail() {
  const dispatch = useDispatch();
  const productId = useParams()?.productId;

  useEffect(() => {
    dispatch(getDetail(productId));
    dispatch(getComments(productId));
  }, [dispatch, productId]);
}
