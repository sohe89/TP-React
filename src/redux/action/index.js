export const addCart = (product) => {
    return {
    type: "ADDITEM",
    payload : product,
    }
}
    //Para eliminar item del carrito
export const delCart = (product) => {
    return {
    type: "DELITEM",
    payload : product,
    }
}
    