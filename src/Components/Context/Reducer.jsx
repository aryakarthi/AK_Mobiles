import { useState } from "react";

// const [productdata, setProductdata] = useState(
//   JSON.parse(localStorage.getItem("allProducts")) || []
// );

export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  products: JSON.parse(localStorage.getItem("allProducts")) || [],
  // addProduct: () => {},
  cart: [],
  fav: [],
};

console.log(initialState.products);

export const stateReducer = (state, action) => {
  console.log("state", state, "action", action);
  const myCart = state.cart;
  const myFav = state.fav;
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "ADD_TO_CART":
      const getProd = myCart.filter(
        (item) => action.payload.prodID === item.prodID
      );
      if (getProd.length === 0) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: myCart.filter((item) => item.prodID !== action.payload.prodID),
      };
    case "ADD_TO_FAV":
      const getFav = myFav.filter(
        (item) => action.payload.prodID === item.prodID
      );
      if (getFav.length === 0) {
        return {
          ...state,
          fav: [...state.fav, action.payload],
        };
      }
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        fav: myFav.filter((item) => item.prodID !== action.payload.prodID),
      };

    case "INCREASE":
      const increCart = myCart.map((item) => {
        if (item.prodID === action.payload.prodID) {
          let qtyInc = item.qty + 1;
          return { ...item, qty: qtyInc };
        } else {
          return item;
        }
      });
      console.log("increCart", increCart);
      return { ...state, cart: increCart };
    case "DECREASE":
      const decreCart = myCart.map((item) => {
        if (item.prodID === action.payload.prodID) {
          let qtyDec = item.qty - 1;
          return { ...item, qty: qtyDec };
        } else {
          return item;
        }
      });
      console.log("decreCart", decreCart);
      return { ...state, cart: decreCart };

    default:
      return state;
  }
};
