import { useEffect, useState } from "react";
import { fetchproducts } from "../api";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchproducts()
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

