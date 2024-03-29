import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeItemFromCart,
} from "../../redux/actions";
import "./Cart.css";
function Cart() {
  const cart = useSelector((state) => {
    console.log("cart page redux state", state.cartReducer);
    return state.cartReducer;
  });
  const dispatch = useDispatch();
  const noItem = [
    "N",
    "o",
    " ",
    "i",
    "t",
    "e",
    "m",
    " ",
    "i",
    "n",
    " ",
    "y",
    "o",
    "u",
    "r",
    " ",
    "c",
    "a",
    "r",
    "t",
  ];

  return (
    <div className="container">
      <h2 className="text-center m-5">My Cart</h2>
      {cart.length !== 0 ? (
        cart.map((cartItem) => {
          return (
            <div
              className="px-3 my-5 color-bg-cart rounded-3"
              key={cartItem.id}
            >
              <div className="container py-4">
                <button
                  onClick={() => dispatch(removeItemFromCart(cartItem))}
                  className="btn-close float-end"
                  aria-label="Close"
                ></button>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img
                      className="rounded-2"
                      src={cartItem.thumbnail}
                      alt={cartItem.title}
                      height="200px"
                      width="180px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{cartItem.title}</h3>
                    <p className="lead fw-bold mb-0">
                      Price: &#8377;{cartItem.price * 50}
                    </p>
                    <p className="lead fw-bold ">
                      Quantity: {cartItem.quantity}
                    </p>
                    <button
                      className="btn btn-outline-dark me-4"
                      onClick={() => {
                        dispatch(deleteFromCart(cartItem));
                      }}
                    >
                      <i className="fa fa-minus" />
                    </button>
                    <span className="lead fw-bold me-4">
                      {cartItem.quantity}
                    </span>
                    <button
                      className="btn btn-outline-dark "
                      onClick={() => {
                        dispatch(addToCart(cartItem));
                      }}
                    >
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                  <div className="col-md-4 d-flex align-items-end">
                    <p className="lead fw-bold ">
                      Total Price: &#8377;
                      {cartItem.price * 50 * cartItem.quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="background-body">
          <div className="waviy">
            {noItem.map((obj, index) => (
              <span style={{ "--i": index + 1 }}>{obj}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
