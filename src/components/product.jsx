import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import {getProduct} from '../reduxKit/features/productSlice'



const Product= ()=>{
    const dispatch = useDispatch();

    const urlParams = useParams();
    useEffect(()=>{
        // fitchProducts();
        dispatch(getProduct(urlParams.id))

    },[dispatch,urlParams.id])
    const {product, loading} = useSelector( array => array.productOne)
    console.log(product)


    // const fitchProducts=()=>{
    //     fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
    //         .then(res=>res.json())
    //         .then(json=>setProduct(json))
    // }
    // const [product,setProduct]= useState({});
    // console.log(product)
    return(<>
    
        {!loading && product? (
            <div className="col-4 p-3 m-1 col-3">
            <div className="card m-auto text-center" style={{width: '18rem'}}>
                <img className="card-img-top w-25 m-auto" src={product.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                </div>
            </div>
        </div>
        ):(
            <h1>Loading....</h1>
        )

        }
    </>
        
    )
}
export default Product