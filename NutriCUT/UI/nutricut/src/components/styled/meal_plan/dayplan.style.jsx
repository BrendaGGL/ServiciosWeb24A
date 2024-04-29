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
  margin: 2rem 0 1rem 0;
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
}

button {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #7f21eb;
  color: #f3f3f3;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
}

button:hover {
  background-color: #6c13d1;
  cursor: pointer;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:  30px 100px 0;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.nutrients ul {
  display: flex;
  width: 35rem;
  height: 1rem;
  justify-content: space-evenly;
}

.meals {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;
}

img {
    border-radius: 25px 25px 0 0;
    width: 100%;
    height: 250px;
}
h3
{
    font-size: 18px;
    color: #292933;
    padding: 25px 25px 10px 25px;
}

article {
    border-radius: 25px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 35px;
    width: 80%;
}

ul {
  list-style: none;
}

.instructions {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  background-color: #7f21eb;
  color: #f3f3f3;
  width: fit-content;
  padding: 0.5rem 1rem;
}

a:hover {
  background-color: #6c13d1;
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

