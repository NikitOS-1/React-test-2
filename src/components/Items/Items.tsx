import Item from "./Item/Item";
import "./Items.scss";
import { itemsArrayProps } from "../../State/itemsArray";

type Props = {
  itemsArray: any[];
  stateCurrency: {
    convert: number;
    currency: string;
  };
};

const Items = ({ itemsArray, stateCurrency }: Props) => {
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
          />
        )
      )}
    </div>
  );
};

export default Items;
