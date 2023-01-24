type Props = {
  changeCurrUAN: () => void;
  changeCurrEUR: () => void;
  changeCurrUSD: () => void;
  changeCurrPLN: () => void;
};

const ButtonCurrency = ({
  changeCurrUAN,
  changeCurrEUR,
  changeCurrUSD,
  changeCurrPLN,
}: Props) => {
  return (
    <div>
      <button onClick={changeCurrUAN}>UAN</button>
      <button onClick={changeCurrEUR}>EUR</button>
      <button onClick={changeCurrUSD}>USD</button>
      <button onClick={changeCurrPLN}>PLN</button>
    </div>
  );
};
export default ButtonCurrency;
