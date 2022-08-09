const useClassName = (inputHasError) => {
  const result = inputHasError ? "form-elements invalid" : "form-elements";
  return result;
};
export default useClassName;
