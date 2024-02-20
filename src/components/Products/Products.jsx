import React,{useEffect,useState} from 'react'
import './Products.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {

    let [products,setProducts] = useState([]);

    useEffect(()=>{

        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((result)=>{console.log("fetched products",result);setProducts(result.products)});
    },[])

    const cards = products && products.map((obj)=>(
        
            <div className='col-md-3'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={obj.thumbnail} />
                <Card.Body>
                    <Card.Title>{obj.title}</Card.Title>
                    <Card.Text>
                   {obj.description}
                    </Card.Text>
                    <Card.Text>
                    &#8377;{obj.price*50}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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