import {DashboardCSS} from '../../../components/Dashboard.style'
import fondo from '../../../static/images/NUTRICUT.png'
import atun from '../../../static/images/food/salmón-en-mantequilla-de-ajo.jpg'
import {useEffect, useState} from "react";
import { Navigation } from '../../../components/Navigation';




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
                            <li><a href="#">Recetas</a></li>
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
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Recusandae, ex.
                        </p>
                        <div className="buttons">
                            <a href="#" className="btn-1">Generar receta</a>
                            <a href="#" className="btn-1">Agenda</a>
                        </div>
                    </div>

                    <div className="header-img">
                        <img src={fondo} alt=""/>
                    </div>

                </div>

            </header>

            <section className="menu-pl container">

                <h2>Top <span>recetas</span> </h2>

                <div className="general-content">

                    <div className="general-txt">
                        <img src={atun} alt=""/>
                        <h3>Tostadas de Ceviche de Pescado</h3>
                        <p>
                            Pescado fresco, limón, tomate ,cebolla morada, cilantro, aguacate, sal y pimienta al gusto.
                        </p>
                        <div className="prices">
                            <a href="#" className="btn-2">Ver receta</a>
                        </div>
                    </div>
                        
                        <div className="general-txt">
                            <img src="Assets/imagenes nutricut/platillos/chiles-rellenos-de-quinoa.jpg" alt=""/>
                            <h3>Chiles rellenos de Quinoa</h3>
                            <p>
                                Chiles poblanos, quinoa, frijoles negros, maíz, tomate, cebolla ,ajo ,queso, salsa de tomate
                            </p>
                            <div className="prices">

                                <a href="#" className="btn-2">Ver receta</a>
                            </div>
                        </div>

                            <div className="general-txt">
                                <img src="Assets/imagenes nutricut/platillos/ensalada-de-nopales.jpg" alt=""/>
                                <h3>Ensalada de Nopalitos</h3>
                                <p>
                                    Nopalitos (pencas de nopal) ,tomate, cebolla, cilantro,aguacate, limón, sal y pimienta al gusto.
                                </p>
                                <div className="prices">
                
                                    <a href="#" className="btn-2">Ver receta</a>
                                </div>
                            </div>
                </div>        
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

                            <a href="#" className="btn-2">Ver receta ahora</a>
                        </div>
                    </div>

                    <div className="about-img">
                        <img src="Assets/imagenes nutricut/platillos/Bowl-de-pollo-teriyaki-SIN FONDO.png" alt=""/>
                    </div>
                </div> 
            </section>



            <section className="menu-pl container">

                <h2>Nuestro <span>menu</span> </h2>

                <div className="general-content">

                    <div className="general-txt">
                        <img src="Assets/imagenes nutricut/platillos/Chips-de-manzana-con-canela.jpg" alt=""/>
                        <h3>Chips de manzana con canela</h3>
                        <p>
                            Manzanas cortadas en rodajas finas y sin semillas, canela en polvo.
                        </p>
                        <div className="prices">

                            <a href="#" className="btn-2">Ver receta</a>
                        </div>
                    </div>
                        
                        <div className="general-txt">
                            <img src="Assets/imagenes nutricut/platillos/salmón-en-mantequilla-de-ajo.jpg" alt=""/>
                            <h3>Salmón en mantequilla de ajo</h3>
                            <p>
                                Filetes de salmón, eneldo fresco, ajo,  jugo de limón, arroz, brócoli y mantequilla.
                            </p>
                            <div className="prices">

                                <a href="#" className="btn-2">Ver receta</a>
                            </div>
                        </div>

                            <div className="general-txt">
                                <img src="Assets/imagenes nutricut/platillos/mac-and-cheese-coliflor-2.webp" alt=""/>
                                <h3>Mac and Cheese de Coliflor</h3>
                                <p>
                                    Coliflor, Ajo, Cebolla amarilla, Mantequilla, Queso cheddar blanco, crema, Pasta en forma de concha, Harina, Migas de pan, Mostaza Dijon.
                                </p>
                                <div className="prices">
                
                                    <a href="#" className="btn-2">Ver receta</a>
                                </div>
                            </div>
                            <div className="general-txt">
                                <img src="Assets/imagenes nutricut/platillos/Tostada-de-queso-con-frutos rojos.jpg" alt=""/>
                                <h3>Tostada de queso con frutos rojos</h3>
                                <p>
                                    huevo, yogur natural sin grasa extracto de vainilla, miel de maple, queso crema, pan integral, 
                                    bayas mixtas (frambuesas, moras y arándanos), azúcar en polvo (opcional).
                                </p>
                                <div className="prices">
                
                                    <a href="#" className="btn-2">Ver receta</a>
                                </div>
                            </div>
                            <div className="general-txt">
                                <img src="Assets/imagenes nutricut/platillos/ensalada-con-milanesa-de-pollo.jpg" alt=""/>
                                <h3>Ensalda con milanesa de pollo</h3>
                                <p>
                                    Lechuga, arugula, jitomate, pimiento (amarillo y rojo), pepino, milanesa de pollo, 
                                    perejil, parmesano, aceite de oliva, vinagre balsámico.
                                </p>
                                <div className="prices">
                
                                    <a href="#" className="btn-2">Ver receta</a>
                                </div>
                            </div>
                            <div className="general-txt">
                                <img src="Assets/imagenes nutricut/platillos/hamburguesa-de-pollo-a-la-plancha.webp" alt=""/>
                                <h3>Hamburguesa de pollo a la plancha</h3>
                                <p>
                                    Lechuga, jitomate, pechuga de pollo, tocino de pavo, queso cheddar, bollos de pan multigrano.
                                </p>
                                <div className="prices">
                
                                    <a href="#" className="btn-2">Ver receta</a>
                                </div>
                            </div>
                </div>        
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