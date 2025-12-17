import { React, Suspense,lazy  } from "react";

import { Route, Routes } from "react-router-dom";

import PageNotFound from "../core/Pagenofound/PageNotFound";
import CustomersList from "../pages/customers/CustomersList";
import FullDetails from "../pages/customers/customer-full-detail/FullDetails";



const AboutPage = lazy(() => import("../pages/about/AboutPage"));
const BlogPage = lazy(() => import("../pages/blogs/BlogPage"));
const ContactPage = lazy(() => import("../pages/contact/ContactPage"));
const Login = lazy(() => import("../pages/login/Login"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Header = lazy(() => import("../core/Header/Header"));
const Wallet = lazy(() => import("../pages/wallet/WalletPage"));

export default function MainRoute() {
  return (
    <div>
      <Suspense fallback={<div> Loading ... </div>}>
        <Header />
        <Routes>
          <Route index element={<CustomersList />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="wallet"
            element={
              <PrivateRoute>
                <Wallet />
              </PrivateRoute>
            }
          />

          <Route path="customers" element={<CustomersList />} />
          <Route path="customers/fulldetail/:id" element={<FullDetails />} />
          <Route path="customers/:id/:email" element={<CustomersList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
