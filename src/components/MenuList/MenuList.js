import MenuButton from './../../components/MenuButtons/MenuButtons';
import './MenuList.scss';


function MenuList() {

    return (
        <>
            <section className="menu-buttons">
                <MenuButton text="Workout Now" />
                <MenuButton text="Workout By Muscle Group" />
                <MenuButton text="Workout by Type" />
                <MenuButton text="Workout by Difficulty" />
            </section>
        </>
    )
}

export default MenuList;