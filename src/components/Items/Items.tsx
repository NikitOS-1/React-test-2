import { useState } from "react";
import Item from "./Item/Item";
import "./Items.scss";
import itemsArray from "./itemsArray";

type ItemsProps = {
  title: string;
  description: string;
  currency: string;
  price: number;
};

const Items = () => {
  const [items, setItems] = useState<ItemsProps[]>(itemsArray);

  return (
    <div className="main">
      {items.map(({ title, description, currency, price }: ItemsProps, i) => (
        <Item
          key={i}
          title={title}
          description={description}
          currency={currency}
          price={price}
        />
      ))}
    </div>
  );
};

export default Items;
