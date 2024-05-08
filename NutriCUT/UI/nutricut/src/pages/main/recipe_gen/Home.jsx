import {Popular} from '../../../components/recipeGen/Popular'
import {Veggie} from '../../../components/recipeGen/Veggie'
import styled from 'styled-components'
import { useEffect } from 'react'

export function Generator() {

    useEffect(() => {
        if(localStorage.getItem('jwt') === null){                   
            window.location.href = '/'
        }
        }, [])

    return (
        <div>
            <br/>
            <Title><h2>Picks <span>Vegetarianos</span> </h2> </Title>
            <Veggie/>
            <br/>
            <Title><h2>Tendencias</h2> </Title>
            <Popular/>
        </div>
    )
}

const Title = styled.div`

h2
{
    font-size: 40px;
    color: #292933;
    margin-bottom: 30px;
}


span
{
    color: #65B741;
}

`
    

