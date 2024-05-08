import {useState, useEffect} from 'react'
import { FavCSS } from '../../../components/styled/User_Interface/favorite.style'
import { Navigation } from '../../../components/Navigation'
import axios from 'axios'
import { FormPlan } from '../../../components/mealPlan/formPlan';
import Planimg from '../../../static/images/Plan.avif'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { PlanOptions } from '../../../components/mealPlan/planOptions';



export function PlanList() {

    const navigate = useNavigate();
    const [error, setError] = useState();
    const [data, setData] = useState([]);
    const [idplans, setIds] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('jwt') === null){                   
            window.location.href = '/'
        }
        else{
            const user = {
                id : localStorage.getItem('id')
                };
                axios.post('http://localhost:8001/api/check_plan',
                user ,{headers: 
                {'Content-Type': 'application/json'}})
            .then((response) => {
                // Success
                setData(response.data.plan_list);
                setIds(response.data.plan_id)
                localStorage.setItem('userAPI', response.data.user);
                localStorage.setItem('hash', response.data.hash);
                return console.log(response.data.user);
            })
            .catch((error) => {
                // Error
                if (error.response) {
                    setError(error);
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        } 
    }, [])


    if (error) {
        return <div>
                <Navigation/>
                <FormPlan/>
                </div>;
    }

    if(!data.length && !idplans.length){
        <><Navigation />
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <PlanOptions/>
                    </div>
                    <div className="col-1">
                        <button type="button"  class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <FavCSS>
            <section className="menu-pl container">
            <div className="general-content">
                {data.map((name, id) => {
                    return(
                        <div className="general-txt" key={name}> 
                                <img src={Planimg} alt=""/>
                                <h3>{name} </h3>
                                <div key={id} className="prices">
                                    <Link to={`/plan_user/${idplans[id]}/${name}`}> 
                                        <a className="btn-2">Ver Plan</a>
                                    </Link>
                                </div>
                        </div>
                        );
                    })}

            </div>
            </section>
        </FavCSS></>
    }


    return (
        <><Navigation />
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <PlanOptions/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <FavCSS>
            <section className="menu-pl container">
            <div className="general-content">
                {data.map((name, id) => {
                    return(
                        <div className="general-txt" key={name}> 
                                <img src={Planimg} alt=""/>
                                <h3>{name} </h3>
                                <div key={id} className="prices">
                                    <Link to={`/plan_user/${idplans[id]}/${name}`}> 
                                        <a className="btn-2">Ver Plan</a>
                                    </Link>
                                </div>
                        </div>
                        );
                    })}

            </div>
            </section>
        </FavCSS></>
    )
}


