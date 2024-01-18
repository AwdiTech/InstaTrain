import BackButton from './../BackButton/BackButton';
import TimerBox from './../TimerBox/TimerBox';

function Header() {

    return (
        <>
            <BackButton />
            <h1 className="main-title">Workout Now</h1>
            <TimerBox />
        </>
    )
}

export default Header;