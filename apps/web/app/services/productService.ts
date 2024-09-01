import api from "@repo/utils";

export const fetchAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const fetchProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
