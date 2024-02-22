import React,{useEffect,useState} from 'react'
import './Products.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions';
import {Link} from 'react-router-dom'

function Products() {

    let [products,setProduct] = useState([]);
    const prod = useSelector((state)=>state.allProducts.products)
    
    const dispatch = useDispatch()
    console.log("use selector state",prod);
    useEffect(()=>{

        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((result)=>{console.log("fetched products",result);setProduct(result.products);dispatch(setProducts(result.products))})
        .catch((err)=>console.log("error in fetch product from products component",err));
    },[])

    const cards = prod && prod.filter((obj)=>{

        return obj
    }).map((obj)=>(
        
            <div className='col-sm-6 col-md-3 mb-4  '>
                <Card style={{ width: '18rem' }} className='h-100 text-center p-4 card-background' key={obj.id}>
                <div className="cont">
                <Card.Img variant="top" className="img-fit image-view"  height={250} src={obj.thumbnail} />
                <div className="middle">
                    <div className="text">
                        
                    </div>
                </div>
                </div>
                <Card.Body>
                    <Card.Title className="mb-1">{obj.title.substring(0,12)}</Card.Title>
                    <Card.Text>
                   {obj.category && obj.category}
                    </Card.Text>
                    <Card.Text>
                    &#8377;{obj.price*50}
                    </Card.Text>
                    <Link to={`/productDetail/${obj.id}`} className='mb-0'><Button  variant="primary" className="view-btn">View Product</Button></Link>
                </Card.Body>
                
                </Card>
            </div>
        ))
    
  return (
    <div className='container'>
        <h2 className='display-6 fw-bolder text-center mt-5 mb-3'>Products</h2>
        <div><label></label></div>
    <div className='row justify-content-center '>
        {cards}

    </div>
    </div>
  )
}

export default Products