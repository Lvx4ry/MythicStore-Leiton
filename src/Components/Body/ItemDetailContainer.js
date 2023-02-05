import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mock/products";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

export default function ItemDetailContainer({ greeting }) {
  const [item, setItem] = useState({});
  const { itemID } = useParams();

  useEffect(() => {
    setItem(products.find((item) => item.id === Number(itemID)));
  }, [itemID]);
  return item.id ? (
    <div className="container-fluid">
      <h1 className="fs-2 text-center">{greeting}</h1>
      <ItemDetail item={item} />
    </div>
  ) : (
    <Spinner />
  );
}
