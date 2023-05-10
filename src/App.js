import Home from "./Home";
import Mayorista from "./Mayorista";
import Minorista from "./Minorista";
import Contacto from "./Contacto"
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Routes, Route } from "react-router-dom";


function App() {
  return(
<>
<Navbar/>
<></>
<></>
<Routes>

<Route path="/" element={<Home/>} />
<Route path="/Mayorista" element={<Mayorista/>} />
<Route path="/Minorista" element={<Minorista/>} />
<Route path="/Contacto" element={<Contacto/>} />
</Routes>



<Footer/>
</>

  )
  
}

export default App;
