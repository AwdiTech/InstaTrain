import ActionBar from './../../components/ActionBar/ActionBar';
import WorkoutList from './../../components/WorkoutList/WorkoutList';
import Header from './../../components/Header/Header';
import './Workout.scss';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import optionSelections from './../../data/optionSelections.json';

function Workout() {

    const location = useLocation();
    const { selection } = location.state || {};
    const [ exercises, setExercises ] = useState([]);


    useEffect(() => {

        let apiParams = {}
        if (selection) {
            apiParams = selection !== "random" ? getApiParameter(selection) : {};
        }
        console.log(apiParams);


        axios.get('https://api.api-ninjas.com/v1/exercises', {
            headers: { 'X-Api-Key': 'bel4lBKjzf+fDrFAl6yF5w==bKRLg6sdCNtH1lhU' },
            params: apiParams //{ muscle: 'biceps'}
        })
            .then(response => {
                console.log(response.data);
                let data = response.data;
                setExercises(data);
                console.log(exercises);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, [selection]);


    const getApiParameter = () => {
        for (let key in optionSelections) {
            if (optionSelections[key].includes(selection)) {
                return { [key]: selection };
            }
        }
        return {};
    }


    return (
        <main className='workout-main'>
            <Header />
            <WorkoutList exercises={exercises}/>
            <ActionBar />
        </main>
    );
}
export default Workout;