import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import Layout from "./Layout";
import ProductSearch from "./pages/ProductSearch";
import Shop from "./pages/Shop";
import MenProduct from "./pages/MenProduct";
import MenProductboots from "./pages/MenProductboots";
import MenProductformals from "./pages/MenProductformals";
import WomenProduct from "./pages/womenproduct";
import WomenProductsandal from "./pages/womenproductsandels";
import WomenProductheels from "./pages/womenproductheels";
import BestOffer from "./pages/Bestoffer";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";


const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="mycart" element={<MyCart/>}/>
        <Route path="searchproduct/:txtdata" element={<ProductSearch/>} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="men" element={<MenProduct/>}/>
        <Route path="Boots" element={<MenProductboots/>}/>
        <Route path="Formals" element={<MenProductformals/>}/>
        <Route path="women" element={<WomenProduct/>}/>
        <Route path="Sandals" element={<WomenProductsandal/>}/>
        <Route path="Heels" element={<WomenProductheels/>}/>
        <Route path="offer" element={<BestOffer/>}/>
        <Route path="/payment" element={<Payment/>} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />  

       </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
