import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import BlogPage from "../pages/blogs/BlogPage";
import PageNotFound from "../core/Pagenofound/PageNotFound";
import Header from "../core/Header/Header";
import Footer from "../core/Footer/Footer";

export default function MainRoute() {
  return (
    <div>
      <Header />
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
    </div>
  );
}
