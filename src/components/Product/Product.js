import PropertiesProduct from "./PropertiesProduct";
const Product = (props) => {
  const properties = [
    {
      value: props.description,
      title: "Description: ",
    },
    {
      value: props.brand,
      title: "Brand: ",
    },
    {
      value: props.stock,
      title: "On Stock: ",
    },
    {
      value: props.id,
      title: "Product Id: ",
    },
  ];

  return (
    <div className={props.className}>
      <div className="container section_product-ppal">
        <div className="target-product">
          <a className="preview-link" href="/">
            <figure className="product__fig">
              <img src={props.img} alt="product" className="product__img" />
            </figure>
            <h1 className="product__title">
              <span>{props.title}</span>
            </h1>

            <div className="descriptions-product">
              <h2 className="heading--2">Product Description:</h2>
              <ul className="product__description-list">
                {properties.map((property) => (
                  <PropertiesProduct
                    key={property.value}
                    name={property.title}
                    value={property.value}
                  ></PropertiesProduct>
                ))}

                <label className="discount" htmlFor="discount">
                  With <strong>discount </strong>of discount:
                  <span> {props.discount} %</span>
                </label>
              </ul>
              <p className="product-price">
                <span>$</span>
                <strong>{props.price}</strong>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
