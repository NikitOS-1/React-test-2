import "./Total.scss";

type Props = {
  productsInCart: {
    [id: number]: number;
  };

  stateCurrency: {
    convert: number;
    currency: string;
  };
};

const Total = ({ productsInCart, stateCurrency }: Props) => {
  return (
    <div className="total">
      Total :{" "}
      {Object.keys(productsInCart).reduce(
        (total, productId) =>
          Math.floor(
            total + productsInCart[+productId] / stateCurrency.convert
          ),
        0
      )}{" "}
    </div>
  );
};
export default Total;
