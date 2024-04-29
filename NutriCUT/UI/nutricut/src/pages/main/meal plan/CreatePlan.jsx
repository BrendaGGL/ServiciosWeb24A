import {useState, useEffect} from 'react'
import { Navigation } from '../../../components/Navigation';
import axios from 'axios';
import { Agenda } from '../../../components/mealPlan/calendar';
import { useParams } from 'react-router-dom';

export function CreatePlan() {

    const UserAPI = localStorage.getItem('userAPI');
    const hash = localStorage.getItem('hash');
    const [mealPlan, setPlan] = useState([]);


    useEffect(() => {
        if(localStorage.getItem('jwt') === null){                   
            window.location.href = '/'
        }
        }, [])

    
    


    return (
        <div>
            <Navigation/>
            <Agenda/>
        </div>
    )   
}

