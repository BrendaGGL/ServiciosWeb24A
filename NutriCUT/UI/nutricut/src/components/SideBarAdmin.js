import { SideBarCSS } from "./Sidebar.style";

export function SideBar(){



    return(
        <SideBarCSS>
            <body> 
                <nav class="main-menu">
            <ul>
                <li>
                    <a href="/panel_admin">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                           Home
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-globe fa-2x"></i>
                        <span class="nav-text">
                            Usuarios
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/panel_admin/recipes">
                       <i class="fa fa-comments fa-2x"></i>
                        <span class="nav-text">
                            Recetas
                        </span>
                    </a>
                    
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>

  </body>
        </SideBarCSS>
        

        
    );
}