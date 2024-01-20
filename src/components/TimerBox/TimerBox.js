import './TimerBox.scss';
import { useState } from 'react';
import stopwatchIcon from './../../assets/stopwatch.png';

function TimerBox() {

    const [time, setTime] = useState(120);

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    return (
        <section className='timer-box'>
            <article className='timer-box__icon'>
                <img src={stopwatchIcon} className='stopwatch-icon' />
            </article>
            <article className='timer-box__time'>
                {formatTime()}
            </article>
        </section>
    )
}

export default TimerBox;