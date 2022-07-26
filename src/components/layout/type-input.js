const TypeInput = (props) => {
  const htmlFor = props.htmlFor;
  const textLabel = props.textLabel;
  const type = props.type;
  const value = props.value;
  const hasError = props.hasError;
  const message = props.message;

  return (
    <div className={props.className}>
      <label htmlFor={htmlFor}>{textLabel}</label>
      <br />
      <input
        type={type}
        id={type}
        required
        onChange={props.onChange}
        onBlur={props.onBlur}
        autoComplete="on"
        value={value}
      />
      {hasError && <p className="error-text">{message}</p>}
    </div>
  );
};

export default TypeInput;
