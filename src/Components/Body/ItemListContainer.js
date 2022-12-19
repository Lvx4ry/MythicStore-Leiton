import "./styles.css";

export default function ItemListContainer({ greeting }) {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="fs-2 text-center">{greeting}</h1>
      </div>
    </main>
  );
}
