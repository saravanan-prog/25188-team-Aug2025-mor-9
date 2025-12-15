import { Route, Routes } from "react-router-dom";

import ProductsList from "../components/Products/ProductsList";
import ProductDetails from "../components/Products/ProductDetails";
import CategoryProducts from "../components/Products/CategoryProducts";
import PageNotFound from "../core/PageNotFound";
export default function MainRoute() {
  return (
    <div>
      <Routes>
        <Route index element={<ProductsList />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/details/:id" element={<ProductDetails />} />
        <Route path="products/category/:category" element={<CategoryProducts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
