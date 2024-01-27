import { Route, Routes } from "react-router-dom";
import { AboutUs, Contact, Home } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
