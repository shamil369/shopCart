
export const setProducts = (products)=>{
    return {
        type:"SET_PRODUCTS",
        payload:products
    }
}

export const selectedProduct = (product)=>{
    return {
        type:"SELECTED_PRODUCTS",
        payload:product
    }
}

export const addToCart = (product)=>{
    return {
        type:"ADD_TO_CART",
        payload:product
    }
}

export const deleteFromCart = (product)=>{
    return {
        type:"DELETE_FROM_CART",
        payload:product
    }
}

export const removeItemFromCart = (product)=>{
    return {
        type:"REMOVE_FROM_CART",
        payload:product
    }
}

export const addWishList =(product)=>{
    return {
        type:"ADD_WISH",
        payload:product
    }
}

export const removeWishList = (product)=>{
    return {
        type:"REMOVE_WISH",
        payload:product
    }
}