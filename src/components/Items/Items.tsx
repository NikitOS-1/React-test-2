import Item from "./Item/Item";
import "./Items.scss";
import { getItemsObject, itemsArrayProps } from "../../State/itemsArray";

type Props = {
  itemsArray: any[];
};

const Items = ({ itemsArray }: Props) => {
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
          />
        )
      )}
    </div>
  );
};

export default Items;
