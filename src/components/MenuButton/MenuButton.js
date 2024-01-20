import optionSelections from './../../data/optionSelections.json';
import './MenuButton.scss';

function MenuButton ({ optionsType, text, clickHandler }) {
    
    let list = [];

    switch (optionsType) {
        case 'muscle' :
            list = optionSelections.muscle;
            break;
        case 'type':
            list = optionSelections.type;
            break;
        case 'difficulty':
            list = optionSelections.difficulty;
            break;
    }


    return (
        <>
            <button className='menu-button' onClick={() => clickHandler(list, optionsType)}>{text}</button>
        </>
    )
}

export default MenuButton