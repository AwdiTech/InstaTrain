import MenuButton from '../MenuButton/MenuButton';
import './MenuList.scss';


function MenuList({triggerPopUpBox, gotoWorkoutPage}) {
    
    function clickHandler(list, option) {

        const optionsType = option;
        console.log(optionsType);

        if (optionsType === "random") {
            gotoWorkoutPage();
        } else {
            triggerPopUpBox(list);
        }
    }


    return (
        <>
            <section className="menu-buttons">
                <MenuButton optionsType="random" text="Workout Now" clickHandler = {clickHandler} className="menu-buttons__button" />
                <MenuButton optionsType="muscle" text="Workout By Muscle Group" clickHandler = {clickHandler} className="menu-buttons__button"/>
                <MenuButton optionsType="type" text="Workout by Type" clickHandler = {clickHandler} className="menu-buttons__button"/>
                <MenuButton optionsType="difficulty" text="Workout by Difficulty" clickHandler = {clickHandler} className="menu-buttons__button"/>
            </section>
        </>
    )
}

export default MenuList;