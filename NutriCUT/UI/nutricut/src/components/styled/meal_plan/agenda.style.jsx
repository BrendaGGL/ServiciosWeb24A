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

button {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #0973ec;
  color: #f3f3f3;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-bottom: 5rem;
}

button:hover {
  background-color: #136fd1;
  cursor: pointer;
}

.controls {
  display: flex;
  align-items: center;
  flex-direction: column;
}

input {
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
}

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    height: 95%;
    margin-left: -250px;
    overflow-y: auto;
    background: #ffffffeb;
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
    padding-left: 30px;
    list-style: none;
}

.sidebar-nav h3{
    padding-top: 30px;
    color: #000000;
}

img
{
    border-radius: 25px 25px 0 0;
    width: 100%;
    height: 250px;
}

h3
{
    font-size: 18px;
    color: #292933;
    padding: 25px 25px 10px 25px;
}

.prices
{
    padding: 0 25px 10px 25px;
    display: flex;
    justify-content: space-between;
}

.prices
{
    color: #ffb534;
    font-size: 18px;
    font-weight: 600;
}

.btn-2
{
    display: inline-block;
    background-color: #ffb534;
    font-size: 14px;
    padding: 7px 15px;
    color: #fbfcff;
    border-radius: 10px;
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
    justify-content: space-around;
    margin-bottom: 20px;
    
}

.dias {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    
}

.dia {
    height: 50px;
    text-align: center;
    line-height: 50px;
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
    width: 200px;
}

.dia-contenedor img{
    height: 200px;
    width: 200px;
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