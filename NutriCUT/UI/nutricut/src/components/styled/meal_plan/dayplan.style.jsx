import styled from "styled-components"

export const DayCSS = styled.div `
    * {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #f3f3f3;
}

.App {
  display: flex;
  align-items: center;
  flex-direction: column;
  
}

section {
  margin: 0.7rem 0 1rem 0;
}

.controls {
  display: flex;
  align-items: center;
  flex-direction: column;
}

input {
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 7rem;
}

button {
  width: 200px;
  padding: 0.5rem 0.5rem;
  background-color: #0973ec;
  color: #f3f3f3;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-left: 7rem;
}

button:hover {
  background-color: #136fd1;
  cursor: pointer;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:  0 80px 0;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.nutrients ul {
  
  list-style-type: circle;
  display: list-item;
  width: 35rem;
  height: 1rem;
  padding-left: 70px;
  justify-content: center;
  font-size: 1.2rem;
}

.meals {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}



.general-content
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;
}

.general-txt
{
    border-radius: 25px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding-bottom: 35px;
}


.general-txt img
{
    border-radius: 25px 25px 0 0;
    width: 100%;
    height: 250px;
}

.general-txt h3
{
    font-size: 18px;
    color: #292933;
    padding: 25px 25px 10px 25px;
}

.general-txt p
{
    font-size: 16px;
    color: #3a3a48;
    padding: 0 25px 20px 25px;
}

.prices
{
    padding: 0 25px 10px 25px;
    display: flex;
    justify-content: space-between;
}

.prices
{
    color: #ffb534;
    font-size: 18px;
    font-weight: 600;
}

.btn-2
{
    display: inline-block;
    background-color: #ffb534;
    font-size: 14px;
    padding: 7px 15px;
    color: #fbfcff;
    border-radius: 10px;
}



a {
  text-decoration: none;
  background-color: #0973ec;
  color: #f3f3f3;
  width: fit-content;
  padding: 0.5rem 1rem;
}

a:hover {
  background-color: #136fd1;
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
  .meals {
    flex-direction: column;
    align-items: center;
  }

  .nutrients ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}


`

