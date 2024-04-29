import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function SearchRecipe() {

    const [input, setInput] = useState('')
    const navigate = useNavigate();

    const Submit = (e) =>{
        e.preventDefault();
            navigate('/searched/'+input)
    };



    return (
        <Form onSubmit={Submit}>
                <div>
                <FaSearch></FaSearch>
                    <input className='search' value={input} onChange={(e) => setInput(e.target.value)} type='text' />
                </div>
                <br />
        </Form>
    )
    }
    const Form = styled.form`

    margin: 0rem 0rem;
    
    div{
        position: absolute;
        width: 100%;
    }
    
    .search{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 0rem 5rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 80%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }


`
