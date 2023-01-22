import ButtonBuy from "./components/Buttons/ButtonBuy";
import ButtonCurrency from "./components/Buttons/ButtonCurrency";
import Item from "./components/Items/Items";
import Total from "./components/Total/Total";

function App() {
  return (
    <>
      <h1>Test-2</h1>
      <h2>Our shop page</h2>
      <ButtonCurrency />
      <Item />
      <ButtonBuy />
      <Total />
    </>
  );
}

export default App;
