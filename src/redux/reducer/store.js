/*Store.js va a contener el estado de la aplicación y la función reducer*/
/*Importar Hook configure Store para configurar store*/
import {configureStore} from "@reduxjs/toolkit";
//Crear e importar el slice: El nombre no tiene que ser literal. Elegí cartReducer 
import cartReducer from "./cartSlice";
export const store = configureStore({
    //Se puede colocar todos los reducer que se quiera.
    //para configurar store utilizo el nombre cartReducer.
    
    reducer: {
        //cartReducer es el nombre con el que configuré el slice
        cart: cartReducer,
    },

 });