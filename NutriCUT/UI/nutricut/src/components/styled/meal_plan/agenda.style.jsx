import styled from "styled-components";

export const PlanCSS = styled.section`


/*!
 * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

body {
    overflow-x: hidden;
 }

/* Toggle Styles */




#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    height: 95%;
    margin-left: -250px;
    overflow-y: auto;
    background: #000;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}


#page-content-wrapper {
    width: 80%;
    position: absolute;
    padding: 10px;
}



/* Sidebar Styles */

.sidebar-nav {
    position: absolute;
    top: 0;
    width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav h3{
    color: white;
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999999;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255,255,255,0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
    color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
}




@media(min-width:768px) {
    #wrapper {
        padding-left: 250px;
    }

    #wrapper.toggled {
        padding-left: 0;
    }

    #sidebar-wrapper {
        width: 250px;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 0;
    }

    #page-content-wrapper {
        padding: 20px;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }
}

`

export const Week = styled.div `
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
}

.container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.recetas {
    width: 200px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.receta {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    cursor: grab;
    border-radius: 5px;
}

.agenda {
    flex: 1;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.semana {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
}

.dias {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    
}

.dia {
    height: 100px;
    text-align: center;
    line-height: 100px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #f9f9f9;
    border: 1px solid transparent;
    transition: all 0.3s ease;
}



.dia-contenedor {
    border: 1px dashed #ccc;
    padding: 5px;
    border-radius: 5px;
    min-height: 100px;
}

.dia-contenedor img{
    height: 80px;
    width: 80px;
}

.dia-contenedor h3{
    font-size: 0.8rem;
}

.prices
{
    padding: 0 25px 10px 25px;
    display: flex;
    justify-content: space-between;
}



.btn-2
{
    display: inline-block;
    font-size: 14px;
    padding: 5px 5px;
    border-radius: 10px;
}



`