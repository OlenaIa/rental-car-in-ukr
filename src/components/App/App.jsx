import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "components/Layout/Layout";

const Home = lazy(() => import("../../pages/HomePage"));
const Catalog = lazy(() => import("../../pages/Catalog"));
const Favorites = lazy(() => import("../../pages/Favorites"));



export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);
