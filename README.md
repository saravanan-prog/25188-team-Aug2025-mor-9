Parametrized Routing
===================

     => Parameterized routing in React usually refers to using React Router (v6+) to define routes that contain dynamic URL segments (parameters). 
      
    =>  These parameters let you pass values through the URL—such as an ID, username, or slug—and then read them inside your components.


    Example
    =======

            http://localhost:3000/productlist    ---> Product Web page

            http://localhost:3000/productlist/s27   ---> single parameter

            http://localhost:3000/productlist/samsugn/s27  --> Multiple parameter

            http://localhost:3000/productlist?productName=samsung&model=s27  --> Query Parameter


Example
-------

      import { BrowserRouter, Routes, Route } from "react-router-dom";
     

      export default function Main() {
            return (
                  <BrowserRouter>
                        <Routes>
                              <Route path="user" element={<User />} />   
                              <Route path="user/:id" element={<User />} /> 
                              <Route path="product" element={<Product />} />
                              <Route path="/product/:category/:productId" element={<Product />} />    
                        </Routes>
                  </BrowserRouter>
            );
      }



      Here, /user/123 or /user/abc will both match this route.



useParams() 
===========
      useParams is a React Router hook used to read dynamic URL parameters from a route. 

Example :  http://localhost:3000/productlist/s27

      import { useParams } from "react-router-dom";

      export default function User() {
            const { id } = useParams();
            return (
                  <h1>User ID: {id}</h1>
            );
      }

export default User;


useLocation() 
=============

      useLocation() returns a location object that contains information about the current URL


Example : http://localhost:3000/productlist?productName=samsung&model=s27




            import { useLocation } from "react-router-dom";

            function MyComponent() {

                  const {pathname,search } = useLocation();
                  
                  console.log("pathname=====>",pathname);  // e.g., "/productlist"
                  console.log("search=======>",search);   // e.g., "?productName=samsung&model=s27"

                  onst params = new URLSearchParams(search);
                  const productName = params.get("productName");
                  const model = params.get("model");

                  return <div>

                        Current path: {pathname}
                        product Name: {productName}
                        product model: {model}
                        
                  </div>;
            }


useSearchParams()
===============

      import { useSearchParams } from "react-router-dom";


      function MyComponent() {
            const [searchParams] = useSearchParams();

            const productName = searchParams.get("productName");      //  ?productName = samsung → "samsung"
            const model = searchParams.get("model");    //  &model=27 → "27"

            return (
                  <div>
                        product Name: {productName} <br />
                        Model: {model}
                  </div>
            );
      }

