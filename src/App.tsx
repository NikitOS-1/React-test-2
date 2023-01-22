import ButtonCurrency from "./components/Buttons/ButtonCurrency";
import Item from "./components/Items/Items";
import Total from "./components/Total/Total";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1>Test-2</h1>
      <h2>Our shop page</h2>
      <ButtonCurrency />
      <Item />
      <Total />
    </div>
  );
}

export default App;
