const Product = (props) => {
  return (
    <div className={props.className}>
      <div className="container section_product-ppal">
        <div className="target-product">
          <a className="preview-link" href="/">
            <figure className="product__fig">
              <img
                src={props.img}
                alt="celular dummy"
                className="product__img"
              />
            </figure>
            <h1 className="product__title">
              <span>{props.title}</span>
            </h1>

            <div className="descriptions-product">
              <h2 className="heading--2">Product Description:</h2>
              <ul className="product__description-list">
                <li className="product__description">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="check-icon h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <label htmlFor="description">
                    <strong>Description:</strong>
                  </label>
                  <span className="product__description">
                    {props.description}
                  </span>
                </li>
                <li className="product__description">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="check-icon h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <label htmlFor="Description">
                    <strong>Brand:</strong>
                  </label>
                  <span className="product__description">{props.brand}</span>
                </li>

                <li className="product__description">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="check-icon h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <label htmlFor="Description">
                    <strong>On Stock:</strong>{" "}
                  </label>
                  <span className="product__description">{props.stock}</span>
                </li>

                <li className="product__description">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="check-icon h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <label htmlFor="Description">
                    <strong>ID of Product:</strong>{" "}
                  </label>
                  <span className="id_product">{props.id}</span>
                </li>

                <label className="discount" htmlFor="discount">
                  With <strong>discount </strong>of discount:
                  <span>{props.discount} %</span>
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
