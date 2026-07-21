import {
  CategoriaPage,
  ProductCards,
  PromoCards,
  TabsProducts,
} from "../../components";
import { Footer, FooterTop, Navbar } from "../../layouts";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="">
      <Navbar />
      <CategoriaPage />
      <ProductCards />
      <PromoCards />
      <TabsProducts />
      <FooterTop />
      <Footer />
    </div>
  );
};
