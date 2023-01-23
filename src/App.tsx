import ButtonCurrency from "./components/ButtonCurrency/ButtonCurrency";
import Items from "./components/Items/Items";
import Total from "./components/Total/Total";
import "./App.scss";
import { useState } from "react";

type ProductsInCart = {
  [id: number]: number;
};

function App() {
  const [productsInCart, setProductsInCart] = useState<ProductsInCart>({});

  const addProductInCart = (id: number, count: number) => {
    setProductsInCart((prevState: ProductsInCart) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }));
  };

  return (
    <div className="app">
      <h1>Test-2</h1>
      <h2>Our shop page</h2>
      <ButtonCurrency />
      <Items addProductInCart={addProductInCart} />
      <Total productsInCart={productsInCart} />
    </div>
  );
}

export default App;
