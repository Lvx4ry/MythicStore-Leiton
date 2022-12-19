import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Body/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting={"Hola!"} />
    </div>
  );
}

export default App;
