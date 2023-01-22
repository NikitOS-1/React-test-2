import ButtonBuy from "../Buttons/ButtonBuy";
import "./Item.scss";

type Props = {
  title: string;
  description: string;
  currency: string;
  price: number;
};

const Item = ({ title, description, currency, price }: Props) => {
  return (
    <div className="wrap">
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <div className="currency">
        {currency} <span className="price">{price}</span>
      </div>
      <ButtonBuy />
    </div>
  );
};

export default Item;
