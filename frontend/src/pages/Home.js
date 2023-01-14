import {useEffect} from 'react';
import {useWorkoutsContext} from '../hooks/useWorkoutsContext';

import WorkoutDetail from '../components/WorkoutDetail'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
     const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json() // Now we should have an array of objects in variables, "json"

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
     }
     fetchWorkouts()

  }, [dispatch])
  
  return (
    <div className="home">
      <div className="workouts">
        {workouts ? (workouts.map((workout) => (
          <WorkoutDetail key={workout._id} workout={workout}/>
        ))) : ""}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home
