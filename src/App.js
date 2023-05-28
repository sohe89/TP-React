//import Home from "./Home";
//import Mayorista from "./Mayorista";
//import Minorista from "./Minorista";
//import Contacto from "./Contacto"
//import Navbar from "./Navbar";
import Footer from "./Footer";
import {Routes, Route } from "react-router-dom";
/*Nuevo elementos*/
import HomeStore from "./component/HomeStore";
import NavbarStore from "./component/NavbarStore";
import Products from "./component/Products";
import Product from "./component/Product";


function App() {
  return(
<>
<NavbarStore/>
<Routes>
        <Route  path="/" element={<HomeStore/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
</Routes>

<Footer/>
</>

  )
  
}

export default App;
