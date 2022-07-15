import IconCheck from "./IconCheck";
const PropertiesProduct = (props) => {
  const name = props.name;
  const value = props.value;

  return (
    <li className="product__description">
      <IconCheck />
      <label htmlFor="description">
        <strong>{name}</strong>
      </label>
      <span className="product__description">{value}</span>
    </li>
  );
};

export default PropertiesProduct;
