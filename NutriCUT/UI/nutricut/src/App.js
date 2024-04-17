import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Home } from './pages/main/Login';
import { Dashboard } from './pages/main/Dashboard'
import { Logout } from "./pages/main/Logout";
import { Panel } from "./pages/admin/Panel";
import { Panel_Recipes } from "./pages/admin/Panel_Recipes";
import { Recipes } from "./pages/main/Gen";
import { Generator } from "./pages/main/Home";
import { Cousine } from "./pages/main/Cousine";
import { Search } from "./pages/main/Search";
import { Recipe } from "./pages/main/Recipe";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path= "/" element={<Navigate to= "/home"/>}/>
        <Route path= "/home" element={<Home/>}/>
        <Route path= "/dashboard" element={<Dashboard/>}/>
        <Route path= "/logout" element={<Logout/>}/>
        <Route path= "/panel_admin" element={<Panel/>}/>
        <Route path= "/panel_admin/recipes" element={<Panel_Recipes/>}/>
        <Route path= "/recipes" element={<Recipes/>}/>
        <Route path="/recipes/generator" element={<Generator/>} />
        <Route path="/cousine/:type" element={<Cousine/>} />
        <Route path="/searched/:search" element={<Search/>} />
        <Route path="/recipe/:name" element={<Recipe/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
