import { useState } from "react"

export const WorkoutForm = ({onSave}) => {
    const [formState, setFormState] = useState({
        title: '',
        sets: '',
        reps: '',
        load: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formState);

        setFormState({
            title: '',
            sets: '',
            reps: '',
            load: ''
        })
    }

    return (
        <form className="create-workout" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label htmlFor="">Exercise Name:</label>
            <input
                type="text"
                onChange={handleChange}
                name="title"
                value = {formState.title}
            />

            <label htmlFor="">Load (in KG):</label>
            <input
                type="number"
                onChange={handleChange}
                name="load"
                value = {formState.load}
            />

            <label htmlFor="">Sets</label>
            <input
                type="number"
                onChange={handleChange}
                name="sets"
                value = {formState.sets}
            />

            <label htmlFor="">Reps</label>
            <input
                type="number"
                onChange={handleChange}
                name="reps"
                value = {formState.reps}
            />

            <button type="submit">Add Workout</button>
        </form>
    )
}