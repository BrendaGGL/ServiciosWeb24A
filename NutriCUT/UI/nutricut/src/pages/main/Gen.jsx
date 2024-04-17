import { API } from "./API";
import { Menu } from "../../components/Menu";
import { SearchBar } from "../../components/SearchBar";
import { BrowserRouter } from "react-router-dom";
export function Recipes() {
  return (
    
      <div>
        <h1>Generador</h1>
        <SearchBar/>
        <Menu/>
        <API/>
      </div>
  );
}