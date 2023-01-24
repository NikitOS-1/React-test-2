import { useState } from "react";
import ButtonCurrency from "../../ButtonCurrency/ButtonCurrency";
import "./Item.scss";

type Props = {
  id: number;
  title: string;
  description: string;
  currency: string;
  price: number;
};
const Item = ({ id, title, description, currency, price }: Props) => {
  return (
    <div className="wrap">
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <div className="currency">
        {currency} <span className="price">{price}</span>
      </div>
      <button>Buy</button>
    </div>
  );
};

export default Item;
