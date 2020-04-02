import React, {useState, useEffect} from 'react';
import { ProductTile } from './containers/ProductTile'
const products = require('./assets/mocks/products.json');

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products)    
  }, []);

  return (
    <div className="App">
      <ProductTile products={productList} />
    </div>
  );
}

export default App;
