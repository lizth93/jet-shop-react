import { authActions } from "store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function useCheckToken() {
  const dispatch = useDispatch();
  const initialToken = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!initialToken) return;

    if (!!initialToken[0]) {
      dispatch(authActions.setToken(initialToken));
      dispatch(authActions.setAuthenticated(true));
      dispatch(authActions.setEmail(initialToken[1]));
      dispatch(authActions.setNickName(initialToken[2]));
    }
  }, [dispatch, initialToken]);
}
