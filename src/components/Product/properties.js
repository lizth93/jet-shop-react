export const useProperties = (source) => {
  if (!source) return;
  const properties = [
    {
      value: source.description,
      title: "Description: ",
    },
    {
      value: source.brand,
      title: "Brand: ",
    },
    {
      value: source.stock,
      title: "On Stock: ",
    },
    {
      value: source.id,
      title: "Product Id: ",
    },
  ];

  return properties;
};
