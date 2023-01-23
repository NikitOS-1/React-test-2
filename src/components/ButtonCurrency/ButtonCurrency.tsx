type Props = {};

const buttonUAN = () => {
  console.log("UAN");
};
const buttonEUR = () => {
  console.log("EUR");
};
const buttonUSD = () => {
  console.log("USD");
};
const buttonPLN = () => {
  console.log("PLN");
};

const ButtonCurrency = (props: Props) => {
  return (
    <div>
      <button onClick={buttonUAN}>UAN</button>
      <button onClick={buttonEUR}>EUR</button>
      <button onClick={buttonUSD}>USD</button>
      <button onClick={buttonPLN}>PLN</button>
    </div>
  );
};
export default ButtonCurrency;
