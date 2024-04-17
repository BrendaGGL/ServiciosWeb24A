import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
import {MenuNav, NLink} from './styled/MenuGen.style'

export function Menu() {
    return (
        <MenuNav>
            <NLink to={'/cousine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </NLink >
            <NLink to={'/cousine/American'}>
                <FaHamburger/>
                <h4>American</h4>
            </NLink>
            <NLink to={'/cousine/Thai'}>
                <GiNoodles/>
                <h4>Thai</h4>
            </NLink>
            <NLink to={'/cousine/Japanese'}>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </NLink>
        </MenuNav>
    )
}


