import React, { useState , useEffect } from 'react';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Products = () => {
const [data, setData] = useState([]);
const[filter, setFilter]= useState(data);
const[loading, setLoading]= useState(false);

let componentMounted = true;

//Use effect
useEffect(() => {
        //Se crea la funcion para obtener los productos
        const getProducts = async () => {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted){
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading (false);
            console.log(filter);
            }
            return () => {
            componentMounted = false;
            }
        }
        //Se llama a la función getProducts
        getProducts();
    }, []);
    //Loading
    const Loading = () => {
        return(
        <>
        <div className='container-fluid'>
            <div className='row row-cols-md-3 row-cols-1'>
            <div className="col"><Skeleton height= {350}/></div>
            <div className="col"><Skeleton height= {350}/></div>
            <div className="col"><Skeleton height= {350}/></div>
            </div>
        </div>
        </>
        )
    };
    // Filtro
    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter (updatedList);
    };
    //Mostrar productos 
    const ShowProducts = () => {
        return (
            <>
            <div className='container-fluid py-4'>
                <div className='row'>
                <div className="buttons d-flex flex-md-row flex-column justify-content-center">
                    <button className='btn btn-outline-primary me-2 mb-2 w-100' onClick = {()=> setFilter(data)}> All </button>
                    <button className='btn btn-outline-primary me-2 mb-2 w-100' onClick = {()=>filterProduct("men's clothing")}>Men’s Clothing</button>
                    <button className='btn btn-outline-primary me-2 mb-2 w-100' onClick = {()=>filterProduct("women's clothing")}>Women’s Clothing </button>
                    <button className='btn btn-outline-primary me-2 mb-2 w-100' onClick = {()=>filterProduct("jewelery")}>Jewelery </button>
                    <button className='btn btn-outline-primary mb-2 w-100' onClick = {()=>filterProduct("electronics")}> Electronic </button>
                </div>
                </div>

            </div>
            <div className='container-fluid'>
                <div className='row row-cols-md-3 row-cols-1'>
                {filter.map((product) => {
                return(
                    <>
                    <div className="col d-flex align-items-stretch">
                    <div className="card card-product px-2 py-2 justify-content-between mb-4 align-items-center" key={product.id}>
                        <div className='w-100'>
                        <h6 className='w-100'>{product.title.substring(0,12)}...</h6>
                        </div>
                        <div>
                        <img src={product.image} alt ={product.title} className='img-product-size'/>
                        </div>
                        <div>
                        <p className='fs-4'>${product.price}</p>
                        </div>
                        <div className='w-100'>
                        <Link to={`../Products/${product.id}`} className="btn btn-primary w-100">Buy Now</Link>
                        </div>
                    </div>
                </div>
                </>
                )
            })}
                </div>
            </div>
            </>
        )
    };

    //Retorna Loading o muestra productos
    return (
        <div>
            <div>
            { loading ? <Loading/> : <ShowProducts/> }
            </div>
        </div>
    )
}
export default Products;
