import React from 'react'
import styled from 'styled-components'
import backgroud from '../static/images/background.png'


export function Navigation() {


    function logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
    }

    return (
        <Nav>
        <header className="header">
            <div className="menu container">
                    <a href="#" className="logo">NUTRICUT</a>
                    <input type="checkbox" id="menu"/>
                    <label htmlFor="menu">
                        <img src="Assets/menu.png" className="menu-icono" alt=""/>
                    </label>
                    <nav className="navbar">
                        <ul>
                            <li><a href="/dashboard">Inicio</a></li>
                            <li><a href="/recipes">Generar receta</a></li>
                            <li><a href="#">Recetas</a></li>
                            <li><a href="/plan">Plan Alimenticio</a></li>
                            <li><a href="/favorite">Favoritos</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="/home" onClick={logout}>Logout</a></li>
                        </ul>
                    </nav>
            </div>
        </header>
        </Nav>
    )
}

const Nav = styled.div`

body
{
    font-family: "Poppins", sans-serif;}

*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none; 
}

.container
{
    max-width: 1200px;
    margin: 0 auto;
}

.header
{
    background: url(${backgroud});  
    display: flex;
    align-items: center;
    min-height: 10vh;
    padding: 80px 0 0 0;
}

.menu
{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo
{
    color: #ffb534;
    font-size: 25px;
    font-weight: 800;
    text-transform: uppercase;
}

.menu .navbar ul li 
{
    position: relative;
    float: left;
}

.menu .navbar ul li a
{
    font-size: 18px;
    padding: 20px;
    color: #dcdde2;
    display: block;
    font-weight: 600;
}

.menu .navbar ul li a:hover
{
    color: #ffb534;
}

#menu
{
    display: none;
}

.menu-icono
{
    width: 25px;
}

.menu label
{
    cursor: pointer;
    display: none;
}

`
