import { useEffect, useState } from "react";
import { searchProduct } from "../api";

export const useSearchProduct = (query) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    searchProduct(query)
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [query]);

  return { products, loading, error };
};
