import { authActions } from "store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { KEY_SAVE_STORAGE_TOKEN } from "config";

export default function useCheckToken() {
  const dispatch = useDispatch();
  const initialToken = JSON.parse(localStorage.getItem(KEY_SAVE_STORAGE_TOKEN));

  useEffect(() => {
    if (initialToken?.[0]) {
      dispatch(authActions.setToken(initialToken[0]));
      dispatch(authActions.setEmail(initialToken[1]));
    }
  }, [dispatch, initialToken]);
}
