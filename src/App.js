//import Home from "./Home";
//import Mayorista from "./Mayorista";
//import Minorista from "./Minorista";
//import Contacto from "./Contacto"
//import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import {Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/*Nuevo elementos*/
import HomeStore from "./component/HomeStore";
import NavbarStore from "./component/NavbarStore";
import Products from "./component/Products";
import Product from "./component/Product";
import CartStore from "./component/CartStore";


function App() {
  return(
<>
<NavbarStore/>
<Routes>
        <Route  path="/" element={<HomeStore/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<CartStore/>}/>
</Routes>
<ToastContainer/>
<Footer/>
</>

  )
  
}

export default App;
