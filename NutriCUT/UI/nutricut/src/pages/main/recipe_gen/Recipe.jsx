import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { RecipeWrapper, Button, Info } from '../../../components/styled/RecipeWrapper.style';
import axios from 'axios';

export function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActivetab] =useState('instructions');

    const Details = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_URL}`)
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);

    };

    

    useEffect(() =>{
        Details();
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
    

    return (
        <RecipeWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActivetab("instructions")}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActivetab("ingredients")}>ingredients</Button>
                <button className={`button ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>Click Me! </button>
                
                {activeTab === 'instructions' && (<div>
                                                        <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                                                        <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                                                    </div>)}
                {activeTab === 'ingredients' && (
                    <ul>
                    {details.extendedIngredients.map((ingredient) =>
                    <li key={ingredient.id}>{ingredient.original}</li>
                    )}
                    </ul>
                )}
                

            </Info>
        </RecipeWrapper>
    )
}
