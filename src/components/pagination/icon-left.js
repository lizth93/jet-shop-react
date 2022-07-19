const IconLeft = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="btn-icon-pagination icon-active"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>

      <span className="numeration-page number">Page {props.currentPage}</span>
    </>
  );
};

export default IconLeft;
