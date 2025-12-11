Parametrized Routing
===================

     => Parameterized routing in React usually refers to using React Router (v6+) to define routes that contain dynamic URL segments (parameters). 
      
    =>  These parameters let you pass values through the URL—such as an ID, username, or slug—and then read them inside your components.


    Example
    =======

            http://localhost:3000/productlist    ---> Product Web page

            http://localhost:3000/productlist/s27   ---> single parameter

            http://localhost:3000/productlist/samsugn/s27  --> Multiple parameter

            http://localhost:3000/productlist?productName=samsung&model=s27









      




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
==========

import { useParams } from "react-router-dom";

function User() {

  const { id } = useParams();

  return (
    <h1>User ID: {id}</h1>
  );
}

export default User;


