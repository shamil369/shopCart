import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {removeWishList} from '../../redux/actions'
import './Favourite.css'

function Favourite() {

    const wishlist = useSelector(state=>{console.log("favourite page redux state",state.wishListReducer);return state.wishListReducer})
    const dispatch = useDispatch()
  return (
    <div className='container'>
        <h2 className='text-center m-5'>My Wishlist</h2>
    { wishlist.length!==0 ? wishlist.map(wishItem=>{
    return(
     <div className="px-3 my-5 bg-light rounded-3" key={wishItem.id}>
          <div className="container py-4">
              <button onClick={()=>dispatch(removeWishList(wishItem))} className="btn-close float-end" aria-label="Close"></button>
              <div className="row justify-content-center">
                  <div className="col-md-4">
                      <img src={wishItem.thumbnail} alt={wishItem.title} height="200px" width="180px" />
                  </div>
                  <div className="col-md-4">
                      <h3>{wishItem.title}</h3>
                      <p className="lead fw-bold mb-0">Price: &#8377;{wishItem.price*50}</p>
                      <p className="lead fw-bold ">Quantity: {wishItem.quantity}</p>
                      <button className='btn btn-outline-dark me-4' onClick={()=>{dispatch(deleteFromCart(cartItem))}}><i className='fa fa-minus'/></button>
                      <span className='lead fw-bold me-4'>{wishItem.quantity}</span>
                      <button className='btn btn-outline-dark ' onClick={()=>{dispatch(addToCart(cartItem))}}><i className='fa fa-plus'/></button>
                  </div>
                  {/* <div className="col-md-4 d-flex align-items-end">
                  <p className="lead fw-bold ">Total Price: &#8377;{cartItem.price*50*.quantity}</p>
                  </div> */}
              </div>
          </div>
      </div>
     ) } )
      :
      <div className='background-body'>
      <div className="wavi">
          <span style={{'--i': 1}}>No</span>
          <span style={{'--i': 2}}>&nbsp;</span>
          <span style={{'--i': 3}}> Item</span>
          <span style={{'--i': 4}}>&nbsp;</span>
          <span style={{'--i': 5}}>&nbsp;In</span>
          <span style={{'--i': 6}}>&nbsp;Your</span>
          <span style={{'--i': 7}}>&nbsp;wishlist</span>
          {/* <span style={{'--i': 8}}> &nbsp;</span>
          <span style={{'--i': 9}}>I</span>
          <span style={{'--i': 10}}>n</span>
          <span style={{'--i': 11}}> &nbsp;</span>
          <span style={{'--i': 12}}>Y</span>
          <span style={{'--i': 13}}>o</span>
          <span style={{'--i': 14}}>u</span>
          <span style={{'--i': 15}}>r</span>
          <span style={{'--i': 16}}> &nbsp;</span>
          <span style={{'--i': 17}}>W</span>
          <span style={{'--i': 18}}>i</span>
          <span style={{'--i': 19}}>s</span>
          <span style={{'--i': 20}}>hlist</span> */}
      </div>
     </div>
}
</div>

    
  )
}

export default Favourite