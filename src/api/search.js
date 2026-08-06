import { BASE_URL } from "./config";

export const searchProduct = async (query) => {
  const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
  if (!response.ok) throw new Error("Qidiruvda xatolik yuz ber ");
  const data = await response.json();
  return data.products;
};
