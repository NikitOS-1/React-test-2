import ButtonCurrency from "./components/ButtonCurrency/ButtonCurrency";
import Items from "./components/Items/Items";
import Total from "./components/Total/Total";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1>Test-2</h1>
      <h2>Our shop page</h2>
      <ButtonCurrency />
      <Items />
      <Total />
    </div>
  );
}

export default App;
