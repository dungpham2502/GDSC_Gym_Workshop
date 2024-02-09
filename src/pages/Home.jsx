import { useState } from "react";
import { WorkoutDetails } from "../components/WorkoutDetails";
import { WorkoutForm } from "../components/WorkoutForm";

export const Home = () => {
    const [workouts, setWorkouts] = useState(() => {
        const savedWorkouts = localStorage.getItem('workouts');
        return savedWorkouts ? JSON.parse(savedWorkouts) : [];
    })

    const saveWorkout = (workout) => {
        const newWorkouts = [...workouts, workout];
        setWorkouts(newWorkouts)
        localStorage.setItem('workouts', JSON.stringify(newWorkouts));
    }

    return (
        <div className="home">
            <div className="workouts">
                <WorkoutDetails workouts={workouts} />
            </div>
            <div>
                <WorkoutForm onSave={saveWorkout}/>
            </div>
        </div>
    )
}

