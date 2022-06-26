import React from "react";
import Products from "../Products/Products.js";
import Signup from "../Signup/Signup.js";
import Cart from "../Cart/Cart.js";
import { Route, Routes} from "react-router-dom";

const Routers = ({productItems}) => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Products productItems={productItems} />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/cart" exact element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default Routers;
 