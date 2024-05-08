import { useState} from 'react';
import axios from 'axios';





export function FormPlan() {

    const [firstname, setFirst] = useState('');
    const [lastname, setLast] = useState('');
    const [error, setError] = useState();

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('id');

    const plan = async e => {

        e.preventDefault();
        try{
            const user = {
                username: username,
                firstName: firstname,
                lastName: lastname,
                email: email,
                };
        
                const response = await axios.post(`https://api.spoonacular.com/users/connect?apiKey=${process.env.REACT_APP_API_URL}`,
                user ,{headers: 
                {'Content-Type': 'application/json'}})
    
                const register = {
                    username: response.data.username ,
                    spoonacularPassword: response.data.spoonacularPassword,
                    hash: response.data.hash,
                    id: id,
                }   
    
                await axios.post('http://localhost:8001/api/register_userapi',
                register ,{headers: 
                {'Content-Type': 'application/json'}})   
    
                window.location.reload();
                console.log("Success");
                console.log(response.data);

        }catch{
            console.error('Error in POST requests:');
            window.location.reload();
        }
        
        }


    return (
        <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <h3>Crea tu primer plan</h3>
                    <p className="blue-text">Antes de poder realizar tu primer plan<br/>Responde este formulario</p>
                    <div className="card">
                        <form className="form-card" onSubmit={plan}>
                            <div className="row justify-content-center text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Nombre(s)<span className="text-danger"> *</span></label> 
                                <input name="firstname" value={firstname} onChange={e => setFirst(e.target.value)}type="text" placeholder="Ingresa tu nombre(s)"/> </div>
                            </div>
                            <div className="row justify-content-center text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Apellido(s)<span className="text-danger"> *</span></label> 
                                <input name="lastname" value={lastname} onChange={e => setLast(e.target.value)} type="text" placeholder="Ingresa tus apellidos"/> </div>
                            </div>
                            <br/>
                            <div className="row justify-content-center">
                                <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-primary">Enviar</button> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
