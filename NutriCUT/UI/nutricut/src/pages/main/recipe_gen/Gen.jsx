import { SearchBar } from "../../../components/SearchBar";
import { Navigation } from "../../../components/Navigation";
import { Generator } from "./Home";
export function Recipes() {
  return (
    
      <div>
        <Navigation/>
        <br/>
        <SearchBar/>
        <Generator></Generator>
      </div>
  );
}