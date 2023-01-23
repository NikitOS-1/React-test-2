import { useState } from "react";
import Item from "./Item/Item";
import "./Items.scss";
import itemsArray, { itemsArrayProps } from "./itemsArray";

const Items = () => {
  const [price, setPrice] = useState<number>(1);

  const change = () => {
    setPrice(price * 40);
  };
  return (
    <div className="main">
      {price}
      <button onClick={change}>change</button>
      {itemsArray.map(
        ({ title, description, currency, price }: itemsArrayProps, i) => (
          <Item
            key={i}
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
