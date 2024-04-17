import {HomeCSS} from '../../components/Home.style'
import {useState } from 'react';
import axios from "axios";

export function Home(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');

    const [open, setOpen] = useState(false);
    const [register, setRegister] = useState(false);

    const submit = async e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
            };
    
            const {data} = await axios.post('http://localhost:8001/api/login',
            user ,{headers: 
            {'Content-Type': 'application/json'}},
                {withCredentials: true});
        
            // Initialize the access & refresh token in localstorage.      
                    localStorage.clear();
                    localStorage.setItem('jwt', data.access_token);
                    window.location.href = '/dashboard'
                    console.log(data.access_token)
            
        }


        const signup = async e => {
            e.preventDefault();
            const user = {
                username: username,
                password: password,
                email: email,
                };
        
                const {data} = await axios.post('http://localhost:8001/api/signup',
                user ,{headers: 
                {'Content-Type': 'application/json'}});

                console.log(data)
                window.location.href = '/'

                
            }



    return(
        
                    <HomeCSS>
                        <body>
                            <header>
                            <h2 class="logo">NUTRICUT</h2>
                                <nav class="navigation">
                                <a href="">Home</a>
                                <a href="#">About</a>
                                <a href="#">Services</a>
                                <a href="#">Contact</a>
                                <button class="btnLogin-popup" onClick={() => { setOpen(!open); } }>Login</button>
                            </nav>
                            </header>

                            <div className={`wrapper ${open? 'active-popup' : ''} ${register? 'active' : ''} ` }>
                                <span   className="icon-close" onClick={() => { setOpen(!open); } }><ion-icon name="close"></ion-icon></span>
                                <div className='form-box login' >
                                    <h2>Login</h2>
                                    <form onSubmit={submit}>
                                    <div className="input-box">
                                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                                        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required/>
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
                                            href="#" className="login-register" onClick={() => { setRegister(!register); } }> Register</a>
                                        </p>
                                    </div>
                                </form>
                                </div>


                                <div className="form-box register">
                                    <h2>Registration</h2>
                                    <form onSubmit={signup}>
                                    <div className="input-box">
                                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                                        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required/>
                                        <label>Username</label>
                                    </div>
                                    <div className="input-box">
                                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                                        <input type="text" name="username" value={email} onChange={e => setEmail(e.target.value)} required/>
                                        <label>Email</label>
                                    </div>
                                    <div className="input-box">
                                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                                        <input type="password" name="username" value={password} onChange={e => setPassword(e.target.value)} required/>
                                        <label>Passwprd</label>
                                    </div>
                                    <div className="input-box">
                                        <span className="icon"><ion-icon name="person"></ion-icon></span>
                                        <input type="password" name="username" value={password2} onChange={e => setPassword2(e.target.value)} required/>
                                        <label>Confirmar Password</label>
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

                        </body>  


                    </HomeCSS>       
            
            
            
        
            
    )
}
