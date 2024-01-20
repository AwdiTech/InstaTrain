import exitIcon from './../../assets/exit-icon.png';
import { useState } from 'react';
import './PopUpBox.scss';
import { v4 as uuidv4 } from 'uuid';

function PopUpBox({ visibilty, exit, listOfOptions, gotoWorkoutPage }) {

    const [ selection, setSelection ] = useState('');

    // if (!visibilty){
    //     return null;
    // }

    return (
        <section className="popup-box">
            <div onClick={exit} className="popup-box__exit-icon">
                <img src={exitIcon} className="icon"/>
            </div>
            
            <select className="popup-box__select" value={selection} onChange={(e) => setSelection(e.target.value)}>
                {listOfOptions.map( option => <option key={uuidv4()} value={option}>{option}</option>)}
            </select>

            <button onClick={gotoWorkoutPage} className='popup-box__enter-button'>ENTER</button>
        </section>
    )
}

export default PopUpBox;