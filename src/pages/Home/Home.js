import MenuList from './../../components/MenuList/MenuList';
import PopUpBox from '../../components/PopUpBox/PopUpBox';
import './Home.scss';
import backgroundImage from '../../assets/background.avif';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Home() {

    const [optionsList, setOptionsList] = useState([]);
    const [popUpBoxVisible, setPopUpBoxVisible] = useState(false);

    const navigate = useNavigate();

    const triggerPopUpBox = (list) => {
        setOptionsList(list);
        setPopUpBoxVisible(true);
    }

    const exitPopUpBox = () => {
        setPopUpBoxVisible(false);
    }

    const gotoWorkoutPage = (select) => {
        navigate('/workout', { state: { selection: select } })
    }

    return (
        <main className='home-main'>
            <img className="home-image" src={backgroundImage} alt="Home Page Background" />
            <MenuList
                optionsList={optionsList}
                setOptionsList={setOptionsList}
                triggerPopUpBox={triggerPopUpBox}
                gotoWorkoutPage={gotoWorkoutPage}
                className="menu-list"
            />

            <PopUpBox
                listOfOptions={optionsList}
                visibility={popUpBoxVisible}
                exit={exitPopUpBox}
                gotoWorkoutPage={gotoWorkoutPage}
                className="popup-box"
            />
        </main>
    )
}

export default Home;