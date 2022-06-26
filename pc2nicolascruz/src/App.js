import React from 'react';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import Routers from "./components/front/Routes/Routes";
import {BrowserRouter as Router} from 'react-router-dom';
import Products from './components/front/Products/Products';

const App = () => {

  const {productItems} = data;

  return (
    <div>
      <Router>
        <Header />
        <Routers productItems={productItems} />
        
      </Router>
    </div>
  );
}

export default App;