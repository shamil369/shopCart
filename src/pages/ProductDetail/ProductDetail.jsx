import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux';
import { selectedProduct } from '../../redux/actions';
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
    <div>
        {  loading ?(<div>...loading</div>) :
        ( <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={singleProduct.thumbnail} />
                <Card.Body>
                    <Card.Title>{singleProduct.title}</Card.Title>
                    <Card.Text>
                   {singleProduct.description}
                    </Card.Text>
                    <Card.Text>
                    &#8377;{singleProduct.price*50}
                    </Card.Text>
                    <Link ><Button  variant="primary">AddtoCart</Button></Link>
                </Card.Body>
                
                </Card>
            )    
        }
    </div>
  )
}

export default ProductDetail