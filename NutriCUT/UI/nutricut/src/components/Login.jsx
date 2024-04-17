import React, {useState } from 'react';
import axios from "axios";

export function Login(){

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [open, setOpen] = useState(false);
const [register, setRegister] = useState(false);

const body = {
    display: 'flex',
    justify_content: 'center',
    alignitems: 'center',
    minheight: '100vh',
    background: 'url(../static/images/login3.jpg)',
    background_size: 'cover',
    background_position: 'center',

}

const myStyle = {
    background: 'url("../static/images/login3.jpg") no-repeat',
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

const submit = async e => {
    e.preventDefault();
    const user = {
        username: username,
        password: password
        };

    
    const {data} = await axios.post('http://localhost:8000/api/token/',
    user ,{headers: 
    {'Content-Type': 'application/json'}},
        {withCredentials: true});

    // Initialize the access & refresh token in localstorage.      
            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
            window.location.href = '/dashboard'
            console.log('access:',data.access, 'refresh_token:', data.refresh)
    
}

  // Similar to componentDidMount and componentDidUpdate:  useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
return (
    
    <div style={body}>
    
    <header>
        <h2 className="logo">NUTRICUT</h2>
        <nav className="navigation">
            <a href="">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <button className="btnLogin-popup"  onClick={() => { setOpen(!open); } }>Login</button>
        </nav>
    </header><div className={`wrapper ${open? 'active-popup' : ''} ${register? 'active' : ''} ` } >
    <span className="icon-close" onClick={() => { setOpen(!open); } }><ion-icon name="close"></ion-icon></span>

        <div className="form-box login">
            <h2>Login</h2>
            
            <form  onSubmit={submit}>
            <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" name="username"value={username} onChange={e => setUsername(e.target.value)} required/>
                <label>Username</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                <label>Password</label>
             </div>
             <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password?</a>
             </div>
             <button type="submit" className="btn">Login</button>
             <div className="login-register">
                <p>Don't have an account?<a 
                    href="#" className="register-link " onClick={() => { setRegister(!register); } }> Register</a>
                </p>
             </div>
         </form>
        </div>


        <div className="form-box register">
            <h2>Registration</h2>
            <form action ="" method="POST" className="formulario" id="formulario">
			<div className="input-box" id="grupo__usuario">
                    <span className="icon"><ion-icon name="person"></ion-icon></span>
					<input type="text" className="formulario__input" name="username" id="username" required/>
					<i className="formulario__validacion-estado"></i>
                    <label>Username</label>
                    <p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>
			<div className="input-box" id="grupo__correo">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
					<input type="email" className="formulario__input" name="email" id="email" required/>
                    <i className="formulario__validacion-estado"></i>
                    <label>Email</label>
                <div className="div">
                    <p className="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
                </div>
			</div>
			<div className="input-box" id="grupo__password">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
					<input type="password" className="formulario__input" name="password" id="password" required/>
                    <i className="formulario__validacion-estado"></i>
                    <label>Password</label>
                <div className="div">
                    <p className="formulario__input-error">La contraseña tiene que ser de 8 a 16 dígitos.</p>
                </div>
			</div>
			<div className="input-box" id="grupo__password2">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
					<input type="password" className="formulario__input" name="password2" id="password2" require/>
                    <i className="formulario__validacion-estado"></i>
                    <label>Confirmar Password</label>
                <div className="div">
                    <p className="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
                </div>	
			</div>

			<div className="remember-forgot">
                <label><input type="checkbox" id="terminos" required/>I agree to the terms & conditions</label>
             </div>
             <button type="submit" className="btn">Register</button>
             <div className="login-register">
                <p>Already have an account?<a 
                    href="#" className="login-link " onClick={() => { setRegister(!register); } }> Login</a>
                </p>
             </div>

         </form>
        </div>


        


        </div>
    
    
        </div>
);
}

