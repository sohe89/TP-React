// solo este importar
import { useAuth } from "../context/AuthContext";

//import { useContext } from 'react';
//import { Context } from '../context/AuthContext';

export function HomeStore(props) {
    
const authContext = useAuth()
        
//creo hoo 
  //const authContext = useContext(context)

  console.log(authContext);

        
    return<div>home</div>
}

export default HomeStore;