import {DashboardCSS} from '../../../components/Dashboard.style'
import fondo from '../../../static/images/NUTRICUT.png'
import {useEffect, useState} from "react";
import { Popular } from '../../../components/recipeGen/Popular';
import Veggie from '../../../components/recipeGen/Veggie';
import { Gluten } from '../../../components/recipeGen/GlutenFree';





export function Dashboard(){

    const [message, setMessage] = useState('');
    useEffect(() => {
        if(localStorage.getItem('jwt') === null){                   
            window.location.href = '/'
        }
        else{
         (async () => {
           try {
            async function makeRequestWithJWT() {
                const options = {
                  method: 'post',
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                  }
                };
                const response = await fetch('http://localhost:8001/api/home', options);
                const result = await response.json();
                return result;
              }
              makeRequestWithJWT();
          } catch (e) {
            console.log('not auth')
          }
         })()};
     }, []);

    function logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
    }


    return(

        <DashboardCSS>
            <body>
            
            <header className="header">
                <div className="menu container">
                    <a href="#" className="logo">NUTRICUT</a>
                    <input type="checkbox" id="menu"/>
                    <label htmlFor="menu">
                        <img src="Assets/menu.png" className="menu-icono" alt=""/>
                    </label>
                    <nav className="navbar">
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="/recipes">Generar receta</a></li>
                            <li><a href="/plan">Plan Alimenticio</a></li>
                            <li><a href="/favorite">Favoritos</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="/home" onClick={logout}>Logout</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="header-content container">
                    <div className="header-txt">
                        <h1>Todo <br/> <span>Planeado</span></h1>
                        <div className="buttons">
                            <a href="/recipes" className="btn-1">Generar receta</a>
                            <a href="/plan" className="btn-1">Agenda</a>
                        </div>
                    </div>

                    <div className="header-img">
                        <img src={fondo} alt=""/>
                    </div>

                </div>

            </header>

            <section className="menu-pl container">

                <h2>Top <span>recetas</span> </h2>

                <Popular/>
            </section>



            <section className="about">
                <div className="about-content container">

                    <div className="about-txt">
                        <h2>No busques mas, <br/> <span>tu/ya lo tienes</span></h2>
                        <p>
                            Hacemos que comer saludable sea fácil y accesible. 
                            Te ofrecemos recetas personalizadas y saludables, 
                            basadas en lo que tienes en tu alacena y en tu plan nutricional. 

                        </p>
                        <div className="platoestrella">

                            <a href="/recipes" className="btn-2">Buscar Receta Ahora</a>
                        </div>
                    </div>

                    <div className="about-img">
                        <img src="Assets/imagenes nutricut/platillos/Bowl-de-pollo-teriyaki-SIN FONDO.png" alt=""/>
                    </div>
                </div> 
            </section>



            <section className="menu-pl container">

                <h2>Picks<span> Vegetarianos</span> </h2>

                 <Veggie/>       
            </section>

            <section className="menu-pl container">

                <h2>Gluten<span> Free</span> </h2>

                 <Gluten/>       
            </section>


                <section className="info-container">

                    <div className="info-img">
                        <img src="Assets/imagenes nutricut/platillos/Pollo,arroz,aguacate,jitomate.jpg" alt=""/>
                    </div>

                    <div className="info-txt">

                        <h2>Sobre <span>Nosotros</span></h2>
                        <p>
                            Somos una empresa que te ofrece recetas personalizadas y saludables, adaptadas a tus gustos, necesidades, 
                            así como a los ingredientes disponibles en tu despensa. Nuestro objetivo es facilitarte la vida y ayudarte a comer mejor. 
                            Con nuestra aplicación web puedes buscar recetas y planificar tus comidas diarias, semanales o mensuales, 
                            con los ingredientes que ya tienes o que puedes conseguir fácilmente. Además, de que puedes agregar tu plan nutricional, 
                            y con ello te damos consejos nutricionales y tips para aprovechar al máximo los alimentos que vas a consumir. 
                            Queremos que disfrutes de la cocina y de una alimentación sana y equilibrada.

                        </p>
                        <a href="#" className="btn-1">Informacion</a>
                    </div>
                </section>

                <footer className="footer">

                    <div className="footer-content container">

                        <div className="link">
                            <h3>Lorem</h3>
                            <ul>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                            </ul>
                        </div>
                        <div className="link">
                            <h3>Lorem</h3>
                            <ul>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                            </ul>
                        </div>
                        <div className="link">
                            <h3>Lorem</h3>
                            <ul>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                            </ul>
                        </div>
                        <div className="link">
                            <h3>Lorem</h3>
                            <ul>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                                <li><a href="#">lorem</a></li>
                            </ul>
                        </div>

                    </div>

                </footer>

    </body>
        </DashboardCSS>

    );
}