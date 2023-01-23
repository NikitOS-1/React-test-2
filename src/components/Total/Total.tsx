import { getItemsObject, itemsArrayProps } from "../Items/itemsArray";
import itemsArray from "../Items/itemsArray";
import "./Total.scss";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: {
    [id: number]: itemsArrayProps;
  };
};

const Total = ({
  productsInCart,
  productsObject = getItemsObject(itemsArray),
}: Props) => {
  return (
    <div className="total">
      Total :{" "}
      {Object.keys(productsInCart).reduce(
        (total, productId) =>
          total + productsInCart[+productId] * productsObject[+productId].price,
        0
      )}{" "}
    </div>
  );
};
export default Total;
