import styled from 'styled-components'
import img from '../static/images/login3.jpg'



export const HomeCSS = styled.nav`
    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

p{
    color: #fff;
}

body
{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(${img}) no-repeat;
    background-size: cover;
    background-position: center;
}

    header
{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
}

    .logo
{
    font-size: 3em;
    color: #ffb534;
    user-select: none;
}

.navigation a
{
    position: relative;
    font-size: 1em;
    color: #ffb534;
    text-decoration: none;
    font-weight: 500;
    margin-left: 40px;
    font-weight: bold;

}

.custom-modal {
  max-width: 90%;  /* Custom width */
  background-color: #f8f9fa; /* Custom background */
}



.navigation a::after
{
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: #65b741;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
}

.navigation a:hover::after
{
    transform-origin: left;
    transform: scaleX(1);
}


.navigation .btnLogin-popup
{
    width: 130px;
    height: 50px;
    background: transparent;
    border: 2px solid #ffb534;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.2em;
    color: #fff;
    font-weight: 500;
    margin-left: 40px; 
    transition: .5s;
}

.navigation .btnLogin-popup:hover
{
    background: #65b741;
    color: rgb(255, 255, 255);
}

.wrapper
{
    position: relative;
    width: 400px;
    height: 400px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transform: scale(0);
    transition: transform .5s ease, height .2s ease;
}

.wrapper.active-popup
{
    transform: scale(1);
}


.wrapper.active
{
    width: 600px;
    height: 450px;
}

.wrapper .form-box
{
    width: 100%;
    padding: 40px;
}

.wrapper .form-box.login
{
    transition: transform .18s ease;
    transform: translateX(0);
}

.wrapper.active .form-box.login
{
    transition: none;
    transform: translateX(-600px);
}


.wrapper .form-box.register
{
    position: absolute;
    transition: none;
    transform: translateX(400px);

}

.wrapper.active .form-box.register
{
    transition: transform .18s ease;
    transform: translateX(0);
}


.wrapper .icon-close
{
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background: #162938;
    font-size: 2em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;
}


.form-box h2 
{
    font-size: 2em;
    color: #65b741;
    text-align: center;
}

.input-box
{
    position: relative;
    width: 100%;
    height: 30px;
    border-bottom: 2px solid #ffb534;
    margin: 0 0 40px;
}

.input-box label
{
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #ffb534;
    font-weight: 500;
    pointer-events: none;
    transition: .5s;
}


.input-box input:focus~label,
.input-box input:valid~label
{
    top: -5px;
}

.input-box input 
{
    width: 100%;
    height: 80%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: white;
    font-weight: 600;
    padding: 0 30px 0 5px;
}

.input-box .icon
{
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #65b741;
    line-height: 40px;
}

.remember-forgot
{
    font-size: .9em;
    color: #ffffff;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}

.remember-forgot label input
{
    accent-color: #162938;
    margin-right: 3px;
}

.remember-forgot a
{
    color: #ffffff;
    text-decoration: none;
}

.remember-forgot a:hover
{
    text-decoration: underline;
}

.btn
{
    width: 100%;
    height: 40px;
    background: #65b741;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
}

.login-register
{
    font-size: .9em;
    color: #ffb534;
    text-align: center;
    font-weight: 500;
    margin: 25px 0 10px;
}

.login-register p a
{
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
}

.login-register p a:hover
{
    text-decoration: underline;
}


.formulario__input-error {
	font-size: 12px;
	margin-bottom: 0;
	display: none;
}

.formulario__input-error-activo {
	display: inline-block;
}

.formulario__validacion-estado {
	position: absolute;
	right: 10px;
	bottom: 15px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;
}



.flex {
    display: flex;
    flex-wrap: wrap;
}

.flex.flex-space-between {
    justify-content: space-between;
}

.flex button {
    margin: 8px auto;
}

.text-center{
    text-align: center;
}

`