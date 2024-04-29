import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function FetchResources() {

    const [ids, setIds] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const id = localStorage.getItem('id')
  // Fetch IDs from Flask
    useEffect(() => {
    const request ={
        id: id
    }
    setIsLoading(true);
    axios.post('http://localhost:8001/api/user_liked',
            request ,{headers: 
            {'Content-Type': 'application/json'}})
            .then(response => {
                setIds(response.data);
                setIsLoading(false);
            })
        .catch(error => {
        console.error('Failed to fetch IDs:', error);
        setError(error);
        setIsLoading(false);
        });
    }, []);

   //Fetch data for each ID
    useEffect(() => {
    
    if (ids.length > 0) {
        setIsLoading(true);
        Promise.all(ids.map(id =>
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_URL}`)
            .then(response => response.json())
        ))
        .then(results => {
            setData(results);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
            setError(error);
            setIsLoading(false);
        });
        }
    }, [ids]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <><div>
          {ids.map((item) => (
              <div key={item}>
                  <h1>ID: {item}</h1>
              </div>
          ))}
      </div><div>
              {data.map((recipe) => (
                  <div key={recipe.id}>
                      <h1>ID: {recipe.id}</h1>
                      <h1>Title: {recipe.title}</h1>

                  </div>
              ))}
          </div></>
  );
}





