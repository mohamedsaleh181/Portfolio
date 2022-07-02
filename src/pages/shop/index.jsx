import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getProductList} from '../../reduxKit/features/productListSlice'
import Spinner from "react-bootstrap/Spinner";

const Shop= ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        // fitchProducts();
        dispatch(getProductList())
    },[dispatch])

    const {products, loading} = useSelector( array => array.list)
    // const fitchProducts=()=>{
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>setProduct(json))
    // }
    
    // const [products,setProduct]= useState([]);

    return(
        <>{ !loading && products ?(

            <div className="row">
                {products.map((item,i)=>{
                    console.log(item)
                    return(
                            <Link to={`product/${item.id}`}  key={i} className="col-3">
                                <div className="col-4 p-3 m-1 col-3">
                                    <div className="card m-auto text-center" style={{width: '18rem'}}>
                                        <img className="card-img-top w-25 m-auto" src={item.image} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text">{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </Link>
                    )
                })}
            </div>
        ):(
            // <h1>Loading....</h1>
            <div className="d-flex justify-content-sm-center mt-5 pt-5">
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
            
        }
        </>
    )
        
    
}
export default Shop