import ErrorIcon from "Icons/error";
const Error = (props) => {
  return (
    <div className="error">
      <span className="error-text">{props.children}</span>
      <ErrorIcon className="error-icon" />
    </div>
  );
};
export default Error;
