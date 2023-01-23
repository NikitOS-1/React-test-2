import { useState } from "react";
import Item from "./Item/Item";
import "./Items.scss";
import itemsArray from "./itemsArray";

type ItemsProps = {
  id: number;
  title: string;
  description: string;
  currency: string;
  price: number;
};

type Props = {
  addProductInCart: (id: number, count: number) => void;
};

const Items = ({ addProductInCart }: Props) => {
  const [items, setItems] = useState<ItemsProps[]>(itemsArray);

  return (
    <div className="main">
      {items.map(
        ({ id, title, description, currency, price }: ItemsProps, i) => (
          <Item
            key={i}
            id={id}
            title={title}
            description={description}
            currency={currency}
            price={price}
            addProductInCart={addProductInCart}
          />
        )
      )}
    </div>
  );
};

export default Items;
