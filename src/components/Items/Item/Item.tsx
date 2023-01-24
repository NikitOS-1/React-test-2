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
  addProductInCart: (id: number, count: number) => void;
};

const Item = ({
  id,
  title,
  description,
  price,
  stateCurrency,
  addProductInCart,
}: Props) => {
  let updatePrice = +Math.floor(price / stateCurrency.convert);

  return (
    <div className="wrap">
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
      <div className="currency">
        {stateCurrency.currency} <span className="price">{updatePrice}</span>
      </div>
      <button onClick={() => addProductInCart(id, price)}>Buy</button>
    </div>
  );
};

export default Item;
