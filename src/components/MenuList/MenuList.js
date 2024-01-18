import MenuButton from '../MenuButton/MenuButton';
import './MenuList.scss';
import { useNavigate } from 'react-router-dom';


function MenuList({optionsList, setOptionsList}) {

const navigate = useNavigate();
    
    function clickHandler(isRandom, list) {
        if (!isRandom) {
            setOptionsList(list);
            navigate('/workout')
        }
        else 
        navigate('/workout') 
    }


    return (
        <>
            <section className="menu-buttons">
                <MenuButton text="Workout Now" clickHandler = {clickHandler}/>
                <MenuButton text="Workout By Muscle Group" clickHandler = {clickHandler}/>
                <MenuButton text="Workout by Type" clickHandler = {clickHandler}/>
                <MenuButton text="Workout by Difficulty" clickHandler = {clickHandler}/>
            </section>
        </>
    )
}

export default MenuList;