import React, { useReducer } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import MyCart from "../MyCart/MyCart";
import MyFav from "../MyFav/MyFav";
import ProductInfo from "../ProductInfo/ProductInfo";
import AddProduct from "../AddProduct/AddProduct";
import { stateContext } from "../../Components/Context/Context";
import { initialState, stateReducer } from "../../Components/Context/Reducer";
import ResponsiveAppBar from "../../Components/ResponsiveAppBar/ResponsiveAppBar";

const Routing = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <div>
      <stateContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          {state?.isLoggedIn ? (
            <>
              <ResponsiveAppBar />
              <Routes>
                <Route path="Home" element={<Home />}></Route>
                <Route path="MyCart" element={<MyCart />}></Route>
                <Route path="MyFav" element={<MyFav />}></Route>
                <Route path="ProductInfo" element={<ProductInfo />}></Route>
                <Route path="AddProduct" element={<AddProduct />}></Route>
                <Route
                  path="*"
                  element={<Navigate to={"/Home"}></Navigate>}
                ></Route>
              </Routes>
            </>
          ) : (
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
            </Routes>
          )}
        </BrowserRouter>
      </stateContext.Provider>
    </div>
  );
};

export default Routing;
