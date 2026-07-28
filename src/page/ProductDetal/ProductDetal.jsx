import "./ProductDetal.scss";

import { FooterTopPages, Navbar, SearchPanel } from "../../layouts";
import {
  ProductCards,
  ProductDetalGallery,
  ProductDetalHeader,
  ProductDetalInformats,
} from "../../components";
import { useParams } from "react-router-dom";
import { useProductDetal, useProducts } from "../../hooks";
import { heroLink } from "../../constants";
import { Loader2 } from "lucide-react";

export const ProductDetal = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductDetal(id);
  const { products } = useProducts();

  return (
    <>
      <Navbar shadow={false} />
      <SearchPanel />

      {loading && (
        <div className="detalLoading">
          <Loader2 />
        </div>
      )}

      {error && (
        <div className="detalLoading">
          <h4>Хатолик: {error}</h4>
        </div>
      )}

      {!loading && !error && product && (
        <>
          <ProductDetalHeader product={product} />
          <div className="container">
            <div className="child">
              <ProductDetalGallery product={product} />
              <ProductDetalInformats product={product} />
            </div>
          </div>

          <ProductCards labels={heroLink} items={products} />
        </>
      )}

      <FooterTopPages />
    </>
  );
};
