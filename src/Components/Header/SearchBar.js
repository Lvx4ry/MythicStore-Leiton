import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { searchContext } from "../Context/SearchProvider";

export default function SearchBar() {
  const { searchValue, saveSearch } = useContext(searchContext);

  let [localSearchInput, setLocalSearchInput] = useState("");

  /* useEffect(() => {
    saveSearch(localSearchInput);
  }, [localSearchInput]); */

  const handleChange = (e) => {
    setLocalSearchInput(e.target.value);
  };

  const handleSearch = () => {
    saveSearch(localSearchInput);
  };

  const enterValidation = (e) => {
    e.key === "Enter" && handleSearch();
  };

  return (
    <>
      <div className="col-8 col-lg-5 mx-2">
        <div className="input-group">
          <input
            type="search"
            className="form-control col-12"
            placeholder="Buscar Producto"
            aria-label="Buscar Producto"
            aria-describedby="button-addon2"
            onChange={handleChange}
            value={localSearchInput}
            onKeyDown={enterValidation}
          />
          <button
            className="btn btn-outline-light"
            type="button"
            id="button-addon2"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
