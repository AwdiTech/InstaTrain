import MenuList from './../../components/MenuList/MenuList';
import './Home.scss';
import backgroundImage from '../../assets/background.avif';
import { useState } from 'react'

function Home() {

    const [optionsList, setOptionsList] = useState([]);

    return(
        <>
        <img className="" src={backgroundImage} alt="Home Page Background" />
        <MenuList optionsList = {optionsList} setOptionsList = {setOptionsList}/>
        </>
    )
}

export default Home;