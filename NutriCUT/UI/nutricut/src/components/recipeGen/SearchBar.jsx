import {useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

export function SearchBar() {

    
    const[input, setInput] = useState("");
    const navigate = useNavigate();
    const Submit = (e) =>{
        e.preventDefault();
        navigate('/searched/'+input)
    };



    return (
        <Form onSubmit={Submit}>
            <div>
                <h2>Buscar <span>Receta</span></h2>
                <br/>
                <FaSearch/>
                <input className='search' onChange={(e)=> setInput(e.target.value)} type='text' value={input}/> 
            </div>
        
    
            
            
        </Form>
    );
}

const Form = styled.form`

    margin: 0rem 20rem;

    h2{
        font-size: 40px;
        color: #292933;
        margin: 0rem 12rem;
    }

span
{
    color: #65B741;
}
    
    div{
        position: relative;
        width: 100%;
    }
    
    .search{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, 150%);
        color: white;
    }

`
