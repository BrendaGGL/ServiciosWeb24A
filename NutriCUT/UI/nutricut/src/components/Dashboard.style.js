import styled from 'styled-components'
import backgroud from '../static/images/background.png'

export const DashboardCSS = styled.section`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

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
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 70vh;
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


.header-content
{
    display: flex;
}

.header-txt
{
    width: 50%;
}

.header-txt h1
{
    font-size: 70px;
    line-height: 85px;
    color: #fbfcff;
    margin-bottom: 20px;
}

.header-txt span
{
    font-size: 90px;
    color: #65B741;
}

.header-txt p
{
    font-size: 16px;
    color: #fbfcff;
    margin-bottom: 30px;
}

.header-img 
{
    width: 50%;
    text-align: center;
}

.header-img img
{
    width: 550px;
}



.buttons 
{
    display: flex;
}

.btn-1
{
    display: inline-block;
    padding: 13px 20px;
    border: 1px solid #C1F2B0;
    color: #C1F2B0;
    border-radius: 15px;
    margin-right: 30px;
    font-size: 16px;
    text-transform: capitalize;   
}

.btn-1:hover 
{
    background-color: #65B741;
    color: #fbfcff;
}



.menu-pl
{
    padding: 0 0 100px 0;
}

h2
{
    font-size: 50px;
    color: #292933;
    margin-bottom: 40px;
}

span
{
    color: #65B741;
}

.general-content
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;
}

.general-txt
{
    border-radius: 25px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding-bottom: 35px;
}


.general-txt img
{
    border-radius: 25px 25px 0 0;
    width: 100%;
    height: 250px;
}

.general-txt h3
{
    font-size: 18px;
    color: #292933;
    padding: 25px 25px 10px 25px;
}

.general-txt p
{
    font-size: 16px;
    color: #3a3a48;
    padding: 0 25px 20px 25px;
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



.about
{
    padding: 100px 0;
    margin-bottom: 100px;
    background-color: #292933;
}

.about-content
{
    display: flex;
}

.about-txt
{
    width: 50%;
}

.about-txt h2
{
    color: #fbfcff;
}

.about-txt p
{
    font-size: 16px;
    color: #c4c4c4;
    margin-bottom: 30px;
}

.platoestrella
{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.platoestrella span
{
    font-size: 80px;
    font-weight: 800;
}

.about-img
{
    width: 50%;
    text-align: right;
}

.info-container
{
    padding-bottom: 100px;
    display: flex;
}

.info-img
{
    width: 50%;
}

.info-img img
{
    border-radius: 25px;
    width: 600px;
}

.info-txt
{
    width: 50%;
    padding-left: 55px;
    
}

.info-txt p
{
    font-size: 16px;
    color: #3a3a48;
    margin-bottom: 35px;
}




.footer
{
    padding: 50px 0;
    background-color: #292933;
}

.footer-content
{
    display: flex;
    justify-content: space-between;
}

.link h3
{
    color: #fbfcff;
    font-size: 18px;
    margin-bottom: 15px;
}

.link a
{
    color: #dcdde2;
    font-size: 16px;
    display: block;
    margin-bottom: 10px;
}

.link a:hover
{
    color: #ffb534;
}

@media(max-width:991px)
{
    .menu
    {
        padding: 30px;
    }

    .menu label
    {
        display: initial;
    }

    .menu .navbar
    {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #303030;
        display: none;
    }

    .menu .navbar ul li
    {
        width: 100%;
    }

    #menu:checked ~ .navbar
    {
        display: initial;
    }

    .header
    {
        min-height: 0vh;
    }

    .header-content
    {
        flex-direction: column;
        padding: 30px 30px 50px 30px;
        text-align: center;
    }

    .header-txt
    {
        width: 100%;
    }

    .header-img
    {
        width: 100%;
    }

    .header-img img
    {
        width: 300px;
    }

    .buttons
    {
        justify-content: center;
    }

    .btn-1
    {
        margin: 0 10px;
    }

    .menu-pl
    {
        padding: 0 30px 30px 30px;
    }

    .general-content
    {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .about
    {
        padding: 30px;
        margin-bottom: 30px;
        text-align: center;
    }

    .about-content
    {
        flex-direction: column;
    }

    .about-txt
    {
        width: 100%;
    }

    .about-txt p
    {
        margin-bottom: 0;
    }

    .about-img
    {
        width: 100%;
        text-align: center;
    }

    .info-container
    {
        padding: 30px;
        flex-direction: column;
    }

    .info-img
    {
        width: 100%;
    }

    .info-img img
    {
        width: 100%;
    }

    .info-txt
    {
        width: 100%;
        padding-left: 0;
        text-align: center;
    }

    .footer
    {
        padding: 30px;
        text-align: center;
    }

    .footer-content
    {
        flex-direction: column;
    }
}




`