import { useNavigate } from 'react-router';
import backIcon from './../../assets/back-icon.svg';
import './BackButton.scss';

function BackButton() {

    const navigate = useNavigate();

    const backButtonHandler = () => {
        navigate('/');
    }

    return (
        <div className='back-button__wrapper'>
            <button onClick={backButtonHandler} className='back-button'>
                <img src={backIcon} alt="back button" className='back-icon' />
            </button>
        </div>
    )

}

export default BackButton;