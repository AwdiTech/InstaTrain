import { useState } from 'react';
import './WorkoutCard.scss';

function WorkoutCard() {
    const { isFlipped, setIsFlipped } = useState(false);


    if (isFlipped) {
        return (
            <section className='card'>
                <p className='card__instructions'>Instructions: { }</p>
            </section>
        )
    }
    else {
        return (
            <section className='card'>
                <article className='card__row'>
                    <p>Name: { }</p>
                    <p>Equipment: { }</p>
                </article>
                <article className='card__row'>
                    <p>Type: { }</p>
                    <p>Difficulty: { }</p>
                </article>
                <article className='card__row'>
                    <p>Muscle: { }</p>
                </article>
            </section>
        )
    }
}

export default WorkoutCard;