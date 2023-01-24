import Item from "./Item/Item";
import "./Items.scss";
import { itemsArrayProps } from "../../State/itemsArray";

type Props = {
  itemsArray: any[];
  stateCurrency: {
    convert: number;
    currency: string;
  };
  addProductInCart: (id: number, count: number) => void;
};

const Items = ({ itemsArray, stateCurrency, addProductInCart }: Props) => {
  return (
    <div className="main">
      {itemsArray.map(
        ({ id, title, description, currency, price }: itemsArrayProps, i) => (
          <Item
            key={i}
            id={id}
            title={title}
            description={description}
            currency={currency}
            price={price}
            stateCurrency={stateCurrency}
            addProductInCart={addProductInCart}
          />
        )
      )}
    </div>
  );
};

export default Items;
