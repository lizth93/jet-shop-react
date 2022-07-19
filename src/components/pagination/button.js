import IconLeft from "./icon-left";
// import IconRight from "./icon-right";

const ButtonPagination = (props) => {
  const currentPage = props.currentPage;
  return (
    <div className={props.className}>
      <button
        data-goto={currentPage}
        className="btn-pagination"
        onClick={props.onClick}
      >
        <IconLeft currentPage={currentPage} />
        {/* <IconRight currentPage={currentPage} /> */}
      </button>
    </div>
  );
};

export default ButtonPagination;
