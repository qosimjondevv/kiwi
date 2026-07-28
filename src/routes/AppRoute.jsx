import { Route, Routes } from "react-router-dom";
import { Home, ProductDetal, Register } from "../page";

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetal />} />
      </Routes>
    </>
  );
};
