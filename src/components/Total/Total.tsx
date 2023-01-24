import { getItemsObject, itemsArrayProps } from "../../State/itemsArray";
import itemsArray from "../../State/itemsArray";
import "./Total.scss";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: {
    [id: number]: itemsArrayProps;
  };
  stateCurrency: {
    convert: number;
    currency: string;
  };
};

const Total = ({
  productsInCart,
  productsObject = getItemsObject(itemsArray),
  stateCurrency,
}: Props) => {
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
