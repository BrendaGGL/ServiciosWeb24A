import { Generator } from "./Home"
import { Route, Routes, BrowserRouter} from "react-router-dom"
import { Cousine } from "./Cousine"
import { Search } from "./Search"
import { Recipe } from "./Recipe"
export function API() {
    return (

            <Routes>
                <Route path="/" element={<Generator/>} />
                <Route path="/cousine/:type" element={<Cousine/>} />
                <Route path="/searched/:search" element={<Search/>} />
                <Route path="/recipe/:name" element={<Recipe/>} />
            </Routes>

    )
}

