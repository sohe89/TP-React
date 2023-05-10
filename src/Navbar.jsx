import React from 'react'

import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
 
<header>
  
  <div className="logo">
       My Empresa

  </div>
  
  <div className="display-menu">

      <Link className='menu' to={"/"}>Home</Link>
      <Link className='menu' to={"/Mayorista"}>Mayorista</Link>
      <Link className='menu' to={"/Minorista"}>Minorista</Link>
      <Link className='menu' to={"/Contacto"}>Contacto</Link>
  </div>
  </header>

    
  
  )
}

export default Navbar;