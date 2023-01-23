import { useState } from "react";
import "./Item.scss";

type Props = {
  id: number;
  title: string;
  description: string;
  currency: string;
  price: number;
  addProductInCart: (id: number, count: number) => void;
};

const Item = ({
  id,
  title,
  description,
  currency,
  price,
  addProductInCart,
}: Props) => {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="wrap">
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <div className="currency">
        {currency} <span className="price">{price}</span>
      </div>
      <button onClick={() => addProductInCart(id, count)}>Buy</button>
    </div>
  );
};

export default Item;
