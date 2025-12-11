import { Route, Routes } from "react-router-dom";

import PageNotFound from "../core/Pagenofound/PageNotFound";
import CustomersList from "../pages/customers/CustomersList";
import FullDetails from "../pages/customers/customer-full-detail/FullDetails";

export default function MainRoute() {
  return (
    <div>
     
        <Routes>
           
            <Route index element = {<CustomersList />} />
            <Route path="customers" element = {<CustomersList />} />
             <Route path="customers/fulldetail/:id" element = {<FullDetails />} />
            <Route path="customers/:id/:email" element = {<CustomersList />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        
    </div>
  );
}
