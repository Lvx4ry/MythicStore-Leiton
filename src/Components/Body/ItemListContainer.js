import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchContext } from "../Context/SearchProvider";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import "./styles.css";
import { productsCollection } from "../../firebaseConfig";
import { getDocs, query, where } from "firebase/firestore";

export default function ItemListContainer({ greeting }) {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();
  const { searchValue } = useContext(searchContext);

  const getProducts = (filteringQuery) => {
    const dbQuery = getDocs(
      filteringQuery
        ? query(productsCollection, where("category", "==", categoryName))
        : productsCollection
    );

    dbQuery.then((res) => {
      const products = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProductList(products);
    });
  };

  useEffect(() => {
    if (searchValue) {
      {
        const capsFilterParam = searchValue.toUpperCase();
        setProductList(
          productList.filter((item) => {
            return (
              item.name.toUpperCase().includes(capsFilterParam) ||
              item.category.toUpperCase().includes(capsFilterParam)
            );
          })
        );
      }
    } else {
      getProducts();
    }
  }, [searchValue]);

  useEffect(() => {
    let filteringQuery = false;

    categoryName !== undefined
      ? (filteringQuery = true)
      : (filteringQuery = false);

    getProducts(filteringQuery);
  }, [categoryName]);

  return productList ? (
    <main>
      <div className="container-fluid">
        <h1 className="fs-2 my-2 text-center">{greeting}</h1>
        <ItemList productArray={productList} />
      </div>
    </main>
  ) : (
    <Spinner />
  );
}
