import { Loader2 } from "lucide-react";
import { CategoriaPage, ProductCards, PromoCards } from "../../components";
import { heroLink, tabsLink } from "../../constants";
import { useProducts, useProductTabs } from "../../hooks";
import { Footer, FooterTop, Navbar } from "../../layouts";
import "./Home.scss";

export const Home = () => {
  const { products, loading, error } = useProducts();
  const heroTabs = useProductTabs();
  const bottomTabs = useProductTabs();

  return (
    <div>
      <Navbar />
      {loading && (
        <div className="loadingWrap">
          <Loader2 className="spinnerIcon" size={48} />
        </div>
      )}
      {error && <h4>Xatolik: {error}</h4>}

      {!loading && !error && (
        <>
          <CategoriaPage />
          <ProductCards
            labels={heroLink}
            items={products}
            activeTab={heroTabs.activeTab}
            onTabChange={heroTabs.setActiveTab}
          />
          <PromoCards />
          <ProductCards
            labels={tabsLink}
            items={products}
            activeTab={bottomTabs.activeTab}
            onTabChange={bottomTabs.setActiveTab}
          />
        </>
      )}

      <FooterTop />
      <Footer />
    </div>
  );
};
