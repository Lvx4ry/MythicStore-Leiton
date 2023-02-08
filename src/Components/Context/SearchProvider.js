import { useState } from "react";
import { createContext } from "react";

export const searchContext = createContext();
const { Provider } = searchContext;

export default function SearchProvider({ children }) {
  let [searchValue, setSearchValue] = useState("");

  const saveSearch = (inputValue) => {
    setSearchValue(inputValue);
  };

  const searchContextValue = { searchValue, saveSearch };

  return <Provider value={searchContextValue}>{children}</Provider>;
}
