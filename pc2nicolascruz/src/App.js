import React, {useState} from 'react';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import Routers from "./components/front/Routes/Routes";
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item)=> item.id === product.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item) => item.id === product.id ?
        {...ProductExist, quantity: ProductExist.quantity + 1} : item)
      );
    } else {
      setCartItems([...cartItems, {...product,  quantity: 1}]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item)=> item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    }else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ? 
        {...ProductExist, quantity: ProductExist.quantity - 1} : item)
      );
    }
  };

  const handleCartClearance = () =>{
    setCartItems([]);
  }

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routers 
          productItems={productItems} 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct} 
          handleCartClearance={handleCartClearance}
          />        
      </Router>
    </div>
  );
}

export default App;