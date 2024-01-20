import WorkoutCard from './../WorkoutCard/WorkoutCard';
import './WorkoutList.scss';
import { v4 as uuidv4 } from 'uuid';

function WorkoutList({exercises}) {


    return (
        <div className='workout-list__wrapper'>
            <section className="workout-list">
                {exercises.map( workout => <WorkoutCard key={uuidv4()} {...workout} />) }
            </section>
        </div>
    )
}

export default WorkoutList;