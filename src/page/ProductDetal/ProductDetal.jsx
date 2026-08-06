import "./ProductDetal.scss";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { FooterTopPages, Navbar, SearchPanel } from "../../layouts";
import {
  ProductCards,
  ProductDetalGallery,
  ProductDetalHeader,
  ProductDetalInformats,
} from "../../components";
import {
  useProductDetal,
  useProducts,
  useProductTabs,
  useGallery,
} from "../../hooks";
import { heroLink } from "../../constants";

export const ProductDetal = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductDetal(id);
  const { products } = useProducts();
  const gallery = useGallery(product);
  const tabs = useProductTabs();

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
              <ProductDetalGallery
                product={product}
                activeImg={gallery.activeImg}
                onSelectImg={gallery.setActiveImg}
              />
              <ProductDetalInformats product={product} />
            </div>
          </div>

          <ProductCards
            labels={heroLink}
            items={products}
            activeTab={tabs.activeTab}
            onTabChange={tabs.setActiveTab}
          />
        </>
      )}

      <FooterTopPages />
    </>
  );
};
