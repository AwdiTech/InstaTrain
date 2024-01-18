import MenuList from './../../components/MenuList/MenuList';
import './Home.scss';
import backgroundImage from './../../../public/background.avif';


function Home() {



    return(
        <>
        <img className="" src={backgroundImage} alt="Home Page Background" />
        <MenuList />
        </>
    )
}

export default Home;