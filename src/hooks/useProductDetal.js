import { useEffect, useState } from "react";
import { productsId } from "../api";

export const useProductDetal = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    productsId(id)
      .then((data) => setProduct(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
};
