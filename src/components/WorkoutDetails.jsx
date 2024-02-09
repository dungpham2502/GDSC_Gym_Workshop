export const WorkoutDetails = ({ workouts }) => {
    return (
      <div>
        {workouts.map((workout, index) => (
          <div key={index} className="workout-details">
            <h4>{workout.title}</h4>
            <p><b>Sets:</b> {workout.sets}</p>
            <p><b>Reps:</b> {workout.reps}</p>
            <p><b>Load:</b> {workout.load} lbs</p>
          </div>
        ))}
      </div>
    );
  }
  