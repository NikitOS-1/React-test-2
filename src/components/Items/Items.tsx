import itemsArray from "./itemsArray";
import Item from "./Item";
import { arrItemProps } from "./itemsArray";

type Props = {};

const Items = (props: Props) => {
  return (
    <>
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
    </>
  );
};

export default Items;
