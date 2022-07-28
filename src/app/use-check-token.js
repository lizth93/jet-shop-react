import { authActions } from "store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function useCheckToken() {
  const dispatch = useDispatch();
  const initialToken = localStorage.getItem("token");

  useEffect(() => {
    dispatch(authActions.setToken(initialToken));
    if (!!initialToken) {
      dispatch(authActions.setAuthenticated(true));
    }
  }, [dispatch, initialToken]);
}
