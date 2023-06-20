
import {useAuth} from '../context/AuthContext';

export function HomeStore() {


    const {user, logout, loading} = useAuth();
       
      console.log(user) 

    const handleLogout = async ()  => {
try{
       await  logout();
       
}catch(error){
    console.error(error)
}

    };


if (loading) return <h1> cargando</h1>


    return (<div>

<h1>

Hola  {user.displayName +  "   hemos registrado tu email " +user.email + ""} en nuestra base de datos, gracias...!!


</h1>
 

<button onClick={handleLogout}>
logout

</button>


    </div>
    );
}

export default HomeStore;