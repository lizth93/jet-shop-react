import { authActions } from "./auth-slice";

export const nickname = (email) => {
  return (dispatch) => {
    const emailAnalized = /^([^]+)@(\w+).(\w+)$/.exec(email);
    const [, name] = emailAnalized;

    dispatch(authActions.setNickName(name));
    return name;
  };
};
