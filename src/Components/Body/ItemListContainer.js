import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mock/products";
import ItemList from "./ItemList";
import "./styles.css";

export default function ItemListContainer({ greeting }) {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    if (categoryName) {
      setProductList(products.filter((item) => item.category === categoryName));
    } else {
      setProductList(products);
    }
  }, [categoryName]);

  return (
    <main>
      <div className="container-fluid">
        <h1 className="fs-2 text-center">{greeting}</h1>
        <ItemList productArray={productList} />
      </div>
    </main>
  );
}
