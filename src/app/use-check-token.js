import { authActions } from "store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function useCheckToken() {
  const dispatch = useDispatch();
  const initialToken = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!initialToken) return;
    dispatch(authActions.setToken(initialToken));
    if (!!initialToken[0]) {
      dispatch(authActions.setAuthenticated(true));
      dispatch(authActions.setEmail(initialToken[1]));
    }
  }, [dispatch, initialToken]);
}
