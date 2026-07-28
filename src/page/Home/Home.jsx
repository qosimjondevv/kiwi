import { Loader2 } from "lucide-react";
import { CategoriaPage, ProductCards, PromoCards } from "../../components";
import { heroLink, tabsLink } from "../../constants";
import { useProducts } from "../../hooks";
import { Footer, FooterTop, Navbar } from "../../layouts";
import "./Home.scss";

export const Home = () => {
  const { products, loading, error } = useProducts();

  return (
    <div>
      <Navbar />
      {loading && (
        <div className="loadingWrap">
          <Loader2 className="animate-spin" size={48} />
        </div>
      )}
      {error && <h4> Xatolik: {error}</h4>}

      {!loading && !error && (
        <>
          <CategoriaPage />
          <ProductCards labels={heroLink} items={products} />
          <PromoCards />
          <ProductCards labels={tabsLink} items={products} />
        </>
      )}

      <FooterTop />
      <Footer />
    </div>
  );
};
