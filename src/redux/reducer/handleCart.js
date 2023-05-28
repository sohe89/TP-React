//Carrito inicia vacio
const cart = [];

const handleCart = (state = cart , action) => {
	const product = action.payload;
	switch (action.type) {
    //Con este nombre se llama a la acción
	case 'ADDITEM':
	//Revisar si el producto existe.
	const exist = state.find((x)=> x.id ===product.id);
	if (exist) {
	//sumar unidad
	return state.map((x)=>x.id === product.id ? {...x, qty: x.qty +1}: x);
    } else {
    const product = action.payload;
        return [
        ...state,
        {
        ...product,
        qty: 1, 
        }
        ]
    }	
	break;
	case "DELITEM": 
		const exist1 = state.find((x)=>x.id === product.id);
		if (exist.qty === 1 ){
            return state.filter ((x) => x.id !== exist1.id);
        } else {
            return state.map ((x) => x.id === product.id ? {...x, qty : x.qty -1} : x);
        }
        break;
	default:
	return state;
	break;
}
}
export default handleCart;
