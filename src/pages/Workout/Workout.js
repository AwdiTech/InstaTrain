import ActionBar from './../../components/ActionBar/ActionBar';
import WorkoutList from './../../components/WorkoutList/WorkoutList';
import Header from './../../components/Header/Header';
import './Workout.scss';

function Workout() {

    return (
        <>
        <Header />
        <WorkoutList />
        <ActionBar />
        </>
    );
}

export default Workout;