React Routing
===============

      => React Router is a library that lets you create multiple pages in a React app using URL-based        navigation—without reloading the page.

      => A way to switch between components using the browser URL.

      Example
      http://localhost:3000/home   => HomePage
      http://localhost:3000/about => Aboutpage

    Basic Installation
    ------------------

      npm install react-router-dom




      |---------------------------------------------------------------------
      | Component         | Meaning                                        |
      | ----------------- | ---------------------------------------------- |
      | **BrowserRouter** | Wraps your app and enables routing             |
      | **Routes**        | Container for all routes                       |
      | **Route**         | Defines a path (URL) and the component to show |
      | **Link**          | Navigation without page reload                 |
      | **useNavigate**   | Navigate using JavaScript (button click)       |
      | **useParams**     | Reading URL parameters                         |
      |--------------------------------------------------------------------|





      import { BrowserRouter, Routes, Route } from "react-router-dom";
      import App from "./App";
      import About from "./About";
      import Contact from "./Contact";
       import PageNotFound from "./PageNotFound";

      export default function Main() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<PageNotFound />} />       // Wild-card-Route
                  </Routes>
            </BrowserRouter>
      );
      }



      import { Link } from "react-router-dom";

      function Navbar() {
            return (
                  <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                  </nav>
            );
      }

