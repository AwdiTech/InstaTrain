import ActionBar from './../../components/ActionBar/ActionBar';
import WorkoutList from './../../components/WorkoutList/WorkoutList';
import Header from './../../components/Header/Header';
import './Workout.scss';
import axios from 'axios'
import { useEffect } from 'react'

function Workout() {

    

    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/exercises', {
            headers: { 'X-Api-Key': 'bel4lBKjzf+fDrFAl6yF5w==bKRLg6sdCNtH1lhU' },
            params: apiParameter
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data', error);
        });
    }, []);


        return (
        <>
            <Header />
            <WorkoutList />
            <ActionBar />
        </>
    );
        }
export default Workout;