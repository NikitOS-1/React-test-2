import itemsArray from "./itemsArray";
import { itemsArrayProps } from "./itemsArray";
import Item from "./Item/Item";
import "./Items.scss";

const Items = () => {
  return (
    <div className="main">
      {itemsArray.map(
        ({ title, description, currency, price }: itemsArrayProps, i) => (
          <Item
            title={title}
            description={description}
            currency={currency}
            price={price}
            key={i}
          />
        )
      )}
    </div>
  );
};

export default Items;
