export type itemsArrayProps = {
  id: number;
  title: string;
  description: string;
  currency: string;
  price: number;
};

const itemsArray: itemsArrayProps[] = [
  {
    id: 1,
    title: "IPhone 12",
    description: "This is IPhone 12",
    currency: "UAN",
    price: 13000,
  },
  {
    id: 2,
    title: "IPhone 8",
    description: "This is IPhone 8",
    currency: "UAN",
    price: 8000,
  },
  {
    id: 3,
    title: "IPhone X",
    description: "This is IPhone X",
    currency: "UAN",
    price: 10000,
  },
];

export const getItemsObject = (array: itemsArrayProps[]) =>
  itemsArray.reduce(
    (object, item) => ({
      ...object,
      [item.id]: item,
    }),
    {}
  );

export default itemsArray;
