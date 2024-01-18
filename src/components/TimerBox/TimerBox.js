import './TimerBox.scss';
import { useState } from 'react';

function TimerBox() {
    const [time, setTime] = useState(0);

    return (
        <section className='timer-box'>
            <article className='timer-box__icon'>
                <img />
            </article>
            <article className='timer-box__time'>
                {time}
            </article>
        </section>
    )
}

export default TimerBox;