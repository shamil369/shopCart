const initialState = {
  products: [
    {
      id: 3411,
      title: "dipesh",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_PRODUCTS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const cart = [];
export const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.find((x) => x.id === action.payload.id);
      if (exist) {
        return state.map((obj) =>
          obj.id === action.payload.id
            ? { ...obj, quantity: obj.quantity + 1 }
            : obj
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
      break;

    case "DELETE_FROM_CART":
      const existItem = state.find((x) => x.id === action.payload.id);
      if (existItem.quantity === 1) {
        return state.filter((obj) => obj.id !== action.payload.id);
      } else {
        return state.map((obj) =>
          obj.id === action.payload.id
            ? { ...obj, quantity: obj.quantity - 1 }
            : obj
        );
      }
      break;

    case "REMOVE_FROM_CART":
      return state.filter((obj) => obj.id !== action.payload.id);
      break;

    default:
      return state;
      break;
  }
};

export const wishListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_WISH":
      const existwish = state.find((x) => x.id === action.payload.id);
      if (existwish) {
        return state;
      } else {
        return [...state, action.payload];
      }
      break;

    case "REMOVE_WISH":
      return state.filter((obj) => obj.id !== action.payload.id);
      break;

    default:
      return state;
      break;
  }
};

const sign = {
  isSignedIn: null,
  userId: null,
  image: null,
};

export const signReducer = (state = sign, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.name,
        image: action.payload.image,
      };
      break;

    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: null, image: null };
      break;

    default:
      return state;
      break;
  }
};
