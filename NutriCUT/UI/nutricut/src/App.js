import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Home } from './pages/main/Login';
import { Dashboard } from "./pages/main/user/Dashboard";
import { Logout } from "./pages/main/user/Logout";
import { Panel } from "./pages/admin/Panel";
import { Panel_Recipes } from "./pages/admin/Panel_Recipes";
import { Recipes } from "./pages/main/recipe_gen/Gen";
import { Generator } from "./pages/main/recipe_gen/Home";
import { Search } from "./pages/main/recipe_gen/Search";
import { Recipe } from "./pages/main/recipe_gen/Recipe";
import Plan from "./pages/main/meal plan/Plan";
import { Favorite } from "./pages/main/user/Favorite";
import { PlanList } from "./pages/main/meal plan/PlanList";
import { CreatePlan } from "./pages/main/meal plan/CreatePlan";
import { Dayplan } from "./pages/main/meal plan/dayPlan";
import { WeeklyPlan } from "./pages/main/meal plan/weeklyPlan";


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
        <Route path="/searched/:search" element={<Search/>} />
        <Route path="/recipe/:name" element={<Recipe/>} />
        <Route path="/plan" element={<PlanList/>} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/plan_user/" element={<CreatePlan/>} />
        <Route path="/plan_user/:id/:name" element={<Plan/>} />
        <Route path="/day_plan/" element={<Dayplan/>} />
        <Route path="/week_plan/" element={<WeeklyPlan/>} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
