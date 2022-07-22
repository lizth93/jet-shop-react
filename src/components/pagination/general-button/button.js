const Button = (props) => {
  return (
    <div className={props.className}>
      <button
        onClick={props.onClick}
        className="btn "
        type={props.type || "button"}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
