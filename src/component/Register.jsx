import {useState} from 'react';


export function Register() {


const [user, setUser] = useState({
  email: '',
  password: '',
});

 const handleChange = ({target: {name, value}}) =>{
  setUser({...user, [name]: value})//actualiza el estado
 };

 const handleSumit = e =>{//muestra lo que tiene
  e.preventDefault()
  console.log(user)
 }
  
  return (
    <form onSubmit={handleSumit}>
<div></div>

  <label htmlFor="email">Email</label>
  <input
   type="email"
    name="email" 
    placeholder="ejemploemail@gmail.com"
     onChange={handleChange}/>
     <div></div>
  <label htmlFor="password">Contraseña</label>
  <input 
  type="password" 
  name="password"
  id="password"
  onChange={handleChange}/>

  <button>Registarme</button>

    </form>
  )
} 
export default Register;