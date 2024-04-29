import {useEffect} from "react"
import axios from "axios";

export const Logout = () => {
    useEffect(() => {
       (async () => {
         try {
           const {data} = await  
                 axios.post('http://localhost:8000/api/logout/',{
                 refresh_token:localStorage.getItem('refresh_token')
                 } ,{headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`}},  
                 {withCredentials: true});
           localStorage.clear();
           axios.defaults.headers.common['Authorization'] = null;
           window.location.href = '/home'
           } catch (e) {
             console.log('logout not working', e)
           }
         })();
    }, []);
    return (
       <div></div>
     )
}