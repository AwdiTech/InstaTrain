import BackButton from './../BackButton/BackButton';
import TimerBox from './../TimerBox/TimerBox';
import './Header.scss';

function Header() {

    return (
        <header className='header'>
            <BackButton />
            <h1 className="main-title">Workout Now</h1>
            <TimerBox />
        </header>
    )
}

export default Header;