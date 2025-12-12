import { Route, Routes } from "react-router-dom";

import PageNotFound from "../core/Pagenofound/PageNotFound";
import CustomersList from "../pages/customers/CustomersList";
import FullDetails from "../pages/customers/customer-full-detail/FullDetails";

import AboutPage from "../pages/about/AboutPage";
import BlogPage from "../pages/blogs/BlogPage";
import ContactPage from "../pages/contact/ContactPage";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";

export default function MainRoute() {
  return (
    <div>
      <Routes>
        <Route index element={<CustomersList />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />




        <Route path="customers" element={<CustomersList />} />
        <Route path="customers/fulldetail/:id" element={<FullDetails />} />
        <Route path="customers/:id/:email" element={<CustomersList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
