import { cloneDeep } from "lodash";
import { paginationActions } from "./pagination-slice";

export default function calculatePages() {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().pagination);
    const pages = Math.ceil(state.total / state.limit);
    dispatch(paginationActions.setCalculatePages(pages));
  };
}
