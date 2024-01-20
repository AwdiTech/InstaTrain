import exitIcon from './../../assets/exit-icon.png';
import { useState } from 'react';
import './PopUpBox.scss';


function PopUpBox({ listOfOptions, visibility, exit, gotoWorkoutPage }) {

    const [selection, setSelection] = useState('');

    const handleEnter = () => {
        if (selection) {
            gotoWorkoutPage(selection);
            exit(); // to close the popup
        }
    };

    if (!visibility) 
        return null;

    return (
        <section className="popup-box">
            <div onClick={exit} className="popup-box__exit-icon"><img src={exitIcon} className="icon"/></div>
            
            <select className="popup-box__select" value={selection} onChange={(e) => setSelection(e.target.value)}>
                {listOfOptions.map( (option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
            
            <button onClick={handleEnter} className='popup-box__enter-button'>ENTER</button>
        </section>
    )
}

export default PopUpBox;