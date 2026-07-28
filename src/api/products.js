import { BASE_URL } from "./config";

export const fetchproducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) throw new Error("MAxsulot topilmadi xatolik yuz berdi ");
  const data = await response.json();

  return data.products;
};

export const productsId = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) throw new Error("mAxsulot topilmadi ");
  return await response.json();
};
