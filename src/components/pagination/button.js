import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//own
import IconLeft from "./icon-left";
import IconRight from "./icon-right";
import skipPage from "../../store/skip-page";

const ButtonPagination = (props) => {
  const params = useParams();

  const { page, pages, total } = useSelector((state) => ({
    page: state.pagination.page,
    pages: state.pagination.pages,
    total: state.pagination.total,
  }));

  const handleClickPagination = (e) => {
    e.preventDefault();

    const btn = e.target.closest(".btn-pagination");
    if (!btn) return;
    const currentPage = btn.dataset.goto;
    const skip = skipPage(+currentPage, +total);
    props.onClickPag(currentPage, params, skip);
  };

  return (
    <div className={props.className}>
      {+page === 1 && +pages > 1 && (
        <IconRight currentPage={page} onClick={handleClickPagination} />
      )}
      {+page === +pages && +pages > 1 && (
        <IconLeft currentPage={+page} onClick={handleClickPagination} />
      )}
      {+page < +pages && +page !== 1 && +page >= 1 && (
        <>
          <IconLeft currentPage={+page} onClick={handleClickPagination} />
          <IconRight currentPage={+page} onClick={handleClickPagination} />
        </>
      )}
    </div>
  );
};

export default ButtonPagination;
