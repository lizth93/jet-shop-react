// import { useSelector } from "react-redux";
const IconRight = (props) => {
  const currentPage = Number(props.currentPage);

  return (
    <button
      data-goto={currentPage + 1}
      className="btn-pagination"
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="btn-icon-pagination"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
      <span className="numeration-page number">Page {currentPage + 1}</span>
    </button>
  );
};
export default IconRight;
