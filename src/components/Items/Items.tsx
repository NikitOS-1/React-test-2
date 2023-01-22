import itemsArray from "./itemsArray";
import { arrItemProps } from "./itemsArray";
import Item from "./Item/Item";
import "./Items.scss";

type Props = {};

const Items = (props: Props) => {
  return (
    <div className="main">
      {itemsArray.map(
        ({ title, description, currency, price }: arrItemProps, i) => (
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
