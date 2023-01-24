import ButtonCurrency from "./components/ButtonCurrency/ButtonCurrency";
import Items from "./components/Items/Items";
import Total from "./components/Total/Total";
import "./App.scss";
import itemsArray from "./State/itemsArray";
import { useState } from "react";

type StateCurrency = any;

function App() {
  const [stateCurrency, setStateCurrency] = useState<StateCurrency>({
    convert: 1,
    currency: "UAN",
  });

  const changeCurrUAN = () => {
    setStateCurrency({ convert: 1, currency: "UAN" });
  };
  const changeCurrEUR = () => {
    setStateCurrency({ convert: 45, currency: "EUR" });
  };
  const changeCurrUSD = () => {
    setStateCurrency({ convert: 40, currency: "USD" });
  };
  const changeCurrPLN = () => {
    setStateCurrency({ convert: 9, currency: "PLN" });
  };

  return (
    <div className="app">
      <h1>Test-2</h1>
      <h2>Our shop page</h2>
      <ButtonCurrency
        changeCurrUAN={changeCurrUAN}
        changeCurrEUR={changeCurrEUR}
        changeCurrUSD={changeCurrUSD}
        changeCurrPLN={changeCurrPLN}
      />
      <Items itemsArray={itemsArray} stateCurrency={stateCurrency} />
      <Total />
    </div>
  );
}

export default App;
