import { useState } from 'react';
import './WorkoutCard.scss';

function WorkoutCard({ name, equipment, type, difficulty, muscle, instructions }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };


    return (
        <section className='card-container' onClick={handleFlip}>
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                <section className='card-front'>
                    <article className='card__column'>
                        <p><b>Name:</b> {name}</p>
                        <p><b>Type:</b> {type}</p>
                        <p><b>Muscle:</b> {muscle}</p>
                    </article>
                    <article className='card__column'>
                        <p><b>Equipment:</b> {equipment}</p>
                        <p><b>Difficulty:</b> {difficulty}</p>
                    </article>
                </section>
                <section className='card-back'>
                    <p className='card__instructions'><b>Instructions:</b> </p>
                    <p className='card__instructions'>{instructions}</p>
                </section>
            </div>
        </section>
    );
}


export default WorkoutCard;