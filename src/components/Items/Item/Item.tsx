import "./Item.scss";

type Props = {
  id: number;
  title: string;
  description: string;
  currency: string;
  price: number;
  stateCurrency: {
    convert: number;
    currency: string;
  };
};

const Item = ({ title, description, price, stateCurrency }: Props) => {
  let updatePrice = Math.floor(price / stateCurrency.convert);
  return (
    <div className="wrap">
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <div className="currency">
        {stateCurrency.currency} <span className="price">{updatePrice}</span>
      </div>
      <button>Buy</button>
    </div>
  );
};

export default Item;
