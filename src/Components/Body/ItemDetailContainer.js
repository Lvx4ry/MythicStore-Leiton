import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mock/products";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";
import { productsCollection } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer({ greeting }) {
  const [item, setItem] = useState({});
  const { itemID } = useParams();

  const getProduct = () => {
    const docReference = doc(productsCollection, itemID);
    const dbQuery = getDoc(docReference);

    dbQuery.then((res) => {
      const product = res.data();
      console.log({ ...product, id: res.id });
      setItem({ ...product, id: res.id });
    });
  };

  useEffect(() => {
    getProduct();
    setItem(products.find((item) => item.id === Number(itemID)));
  }, [itemID]);

  return item ? (
    <div className="container-fluid">
      <h1 className="fs-2 my-2 text-center">{greeting}</h1>
      <ItemDetail item={item} />
    </div>
  ) : (
    <div className="container col-12 d-flex justify-content-center">
      <Spinner />
    </div>
  );
}
