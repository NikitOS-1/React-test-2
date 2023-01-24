import ButtonCurrency from "./components/ButtonCurrency/ButtonCurrency";
import Items from "./components/Items/Items";
import Total from "./components/Total/Total";
import "./App.scss";
import { useState } from "react";
import { getItemsObject, itemsArrayProps } from "./State/itemsArray";
import itemsArray from "./State/itemsArray";

type CurrentCurrency = {
  price: number;
  currency: string;
};

function App() {
  return (
    <div className="app">
      <div></div>
      <h1>Test-2</h1>
      <h2>Our shop page</h2>
      <ButtonCurrency />
      <Items itemsArray={itemsArray} />
      <Total />
    </div>
  );
}

export default App;
