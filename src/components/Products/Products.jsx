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
        
            <div className='col-md-3 card-width'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="img-fit" width={100} height={180} src={obj.thumbnail} />
                <Card.Body>
                    <Card.Title>{obj.title}</Card.Title>
                    <Card.Text>
                   {obj.description && obj.description.substring(0,100)}...
                    </Card.Text>
                    <Card.Text>
                    &#8377;{obj.price*50}
                    </Card.Text>
                    <Link to={`/productDetail/${obj.id}`}><Button  variant="primary">AddtoCart</Button></Link>
                </Card.Body>
                
                </Card>
            </div>
        ))
    
  return (
    <div>
        <h2>Products</h2>
    <div className='row'>
        {cards}

    </div>
    </div>
  )
}

export default Products