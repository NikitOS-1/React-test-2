import arrItem from "./arrItem";
import { arrItemProps } from "./arrItem";
import "./Item.scss";

type Props = {};

const Item = (props: Props) => {
  return (
    <>
      {arrItem.map(({ title, description, currency, price }: arrItemProps) => (
        <div>
          <div>{title}</div>
          <div>{description}</div>
          <div>{currency}</div>
          <div>{price}</div>
        </div>
      ))}
    </>
  );
};
export default Item;
