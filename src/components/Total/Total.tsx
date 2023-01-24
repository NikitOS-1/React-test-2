import { getItemsObject, itemsArrayProps } from "../../State/itemsArray";
import itemsArray from "../../State/itemsArray";
import "./Total.scss";

type Props = {};

const Total = (props: Props) => {
  return (
    <div className="total">
      Total :{" "}
      {/* {Object.keys(productsInCart).reduce(
        (total, productId) =>
          total + productsInCart[+productId] * productsObject[+productId].price,
        0
      )}{" "} */}
    </div>
  );
};
export default Total;
