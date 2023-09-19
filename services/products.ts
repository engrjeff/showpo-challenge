import productsData from "../data.json";

// derive types
export type Product =
  (typeof productsData)["data"]["products"]["items"][number];

export const getProducts = async () => {
  return productsData.data.products.items;
};
