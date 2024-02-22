import React,{useEffect,useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux';
import { selectedProduct, addToCart,addWishList } from '../../redux/actions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom';
function ProductDetail() {

const {id} = useParams();
const [loading,setLoading] = useState(true)
console.log("upcoming id",id)
const singleProduct = useSelector(state=>state.selectedProductReducer)
const dispatch = useDispatch();

const fetchSingleProduct = ()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>{console.log("single product fetched daata",data);dispatch(selectedProduct(data));setLoading(false);})
    .catch(err=>console.log("error in product Detail componect fetch single product",err))

}

useEffect(()=>{
        if(id && id !==""){
            fetchSingleProduct();
        }
},[id])

  return (
    <div className=''>
        <div className='container my-5 py-5'>
            {  loading ?(<div>...loading</div>) :
            ( 
                <div className='row py-4'>
                    <div className="col-md-6">
                        <img src={singleProduct.thumbnail} alt={singleProduct.title} height="400px" width="400px"/>
                    </div>
                    <div className='col-md-6'>
                        <h4 className="text-uppercase text-black-50">{singleProduct.category}</h4>
                        <h1 className='display-5'>{singleProduct.title} </h1>
                        <p className='lead fw-bolder'>Rating {singleProduct.rating && singleProduct.rating}<i className="fa fa-star-half-empty"></i></p>
                        <h3 className='display-6 fw-bold my-4'> &#8377;{singleProduct.price*50}</h3>               
                        <p className='lead'>{singleProduct.description}</p>
                        <button className='btn btn-outline-dark mx-2' onClick={()=>dispatch(addToCart(singleProduct))}>Add to Cart</button>
                        <NavLink to="/cart" className="btn btn-dark">View Cart</NavLink>
                        <button className='btn btn-outline-dark mx-2' onClick={()=>dispatch(addWishList(singleProduct))}>Add to wishlist</button>
                    </div>
                </div>
      
                )    
            }
        </div>
     </div>   
  )
}

export default ProductDetail