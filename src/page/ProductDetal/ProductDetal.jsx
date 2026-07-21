import "./ProductDetal.scss";

import { FooterTopPages, Navbar, SearchPanel } from "../../layouts";
import {
  ProductCards,
  ProductDetalGallery,
  ProductDetalHeader,
  ProductDetalInformats,
} from "../../components";
export const ProductDetal = () => {
  return (
    <>
      <Navbar shadow={false} />
      <SearchPanel />
      <ProductDetalHeader />
      <div className="container">
        <div className="child">
          <ProductDetalGallery />
          <ProductDetalInformats />
        </div>
      </div>
      <ProductCards />
      <FooterTopPages />
    </>
  );
};
