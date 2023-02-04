import Item from "./Item";

export default function ItemList({ productArray }) {
  return (
    <div className="d-flex justify-content-center gap-2 flex-wrap ">
      {productArray.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
}
