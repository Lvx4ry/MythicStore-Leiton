import Item from "./Item";
import Spinner from "./Spinner";

export default function ItemList({ productArray }) {
  return productArray.length === 0 ? (
    <Spinner />
  ) : (
    <div className="d-flex justify-content-center gap-4 flex-wrap ">
      {productArray.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
}
