import { RES_PER_PAGE } from "config";

export default function skipPage(page, total) {
  let skip = page === 1 ? 0 : page * RES_PER_PAGE - RES_PER_PAGE;

  if (total < skip) {
    skip = total;
  }

  return skip;
}
