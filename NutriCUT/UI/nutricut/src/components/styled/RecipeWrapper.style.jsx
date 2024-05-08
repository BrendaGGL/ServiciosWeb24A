import styled from "styled-components";

export const RecipeWrapper = styled.div`

    margin-top: 3rem;
    margin-bottom: 5rem;
    display: flex;


    img{
        margin-left: 50px;
        border-radius: 50px;
    }
    p{
        margin-top: 40px;
    }

    h2{
        margin-bottom: 2rem;
        margin-left: 80px;
    }
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }

    .button {

    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.button:hover {
  background-color: #313131;
  color: white;
}

.button.clicked {
  background-color:  #313131;
  color: white;
  
}


`

export const Button = styled.button`

    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    :hover{
        background-color: #313131;
        color: white;
    }
`


export const Info = styled.div`

    margin-left: 5rem;

`
    
