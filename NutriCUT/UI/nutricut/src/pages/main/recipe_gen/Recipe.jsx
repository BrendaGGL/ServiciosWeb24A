import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { RecipeWrapper, Button, Info } from '../../../components/styled/RecipeWrapper.style';
import axios from 'axios';
import { Navigation } from '../../../components/Navigation';

export function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActivetab] =useState('instructions');
    const id = localStorage.getItem('id')

    const Details = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_URL}`)
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);

    };

    const Liked = async () => {
        const request ={
            id: id,
            recipe : params.name
        }
        axios.post('http://localhost:8001/api/check_liked',
            request ,{headers: 
            {'Content-Type': 'application/json'}})
            .then(response => {
                setClicked(true);
            })
        .catch(error => {
        console.error('Not Liked:', error);
        });
    }
    

    

    useEffect(() =>{
        
        if(localStorage.getItem('jwt') === null){                   
                window.location.href = '/'
        }
        else{
            Details();
            Liked();
        }
        
    }, [params.name]);



    const [isClicked, setClicked] = useState(false);
    
    const handleClick = async () => {
        setClicked(true);

        const like = {
            user_id : localStorage.getItem('id'),
            recipe_id: details.id
        }

        await axios.post('http://localhost:8001/api/recipe_like',
                like ,{headers: 
                {'Content-Type': 'application/json'}})
        };
    

    if(isClicked){
        return  <><Navigation /><RecipeWrapper>
            <div className="row">
                <div className='recipe-title'>
                    <h2>{details.title}</h2>
                    <img src={details.image} alt="" />
                </div>
            </div>
        
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActivetab("instructions")}>Instrucciones</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActivetab("ingredients")}>Ingredientes</Button>
            <button className={`button ${isClicked ? 'clicked' : ''}`}>Me Gusta</button>

            {activeTab === 'instructions' && (
            <div>
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
            </div>
            )}
            {activeTab === 'ingredients' && (
                
                <ul>
                    {details.extendedIngredients.map((ingredient) => (<li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                    
                </ul>   
            )}
        </Info>
    </RecipeWrapper></>
    }

    return (
        <><Navigation /><RecipeWrapper>
            <div className="row">
                <div className='recipe-title'>
                    <h2>{details.title}</h2>
                    <img src={details.image} alt="" />
                </div>
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActivetab("instructions")}>Instrucciones</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActivetab("ingredients")}>Ingredientes</Button>
                <button className={`button ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>Me Gusta</button>

                {activeTab === 'instructions' && (<div>
                    <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                    <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
                </div>)}
                {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.original}</li>
                        )}
                    </ul>
                )}


            </Info>
        </RecipeWrapper></>
    )
}
