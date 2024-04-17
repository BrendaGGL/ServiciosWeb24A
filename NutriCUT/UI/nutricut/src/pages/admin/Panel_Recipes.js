import { Container } from "../../components/AdminContainer.style";
import { RecipeList } from "../../components/RecipeList";
import { SideBar } from "../../components/SideBarAdmin";

export function Panel_Recipes(){

    return(
            <><SideBar>
        </SideBar><Container>
                    <div class="container">
                        <RecipeList>     
                        </RecipeList> 
                    </div>
            </Container>
            </>
    
    );
}