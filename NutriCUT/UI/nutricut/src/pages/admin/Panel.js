import { RecipeList } from "../../components/RecipeList";
import { SideBar } from "../../components/SideBarAdmin";
import { Container } from "../../components/AdminContainer.style";
export function Panel(){

    return(
            <><SideBar>
        </SideBar><Container>
                <div class="container">
                    <h1 class="mt-5 mb-4">Panel de Administrador - Nutricut</h1>


                    <h2>Usuarios</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo Electrónico</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="usuariosTabla">

                        </tbody>
                    </table>
                    <button class="btn btn-primary" onclick="agregarUsuario()">Agregar Usuario</button>


                    <h2 class="mt-5">Recetas</h2>
                    <RecipeList>
                    </RecipeList>
                    <button class="btn btn-primary" onclick="agregarReceta()">Agregar Receta</button>
                </div>
            </Container></>
    
    );
}