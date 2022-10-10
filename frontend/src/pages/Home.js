import { useContext, useEffect, useState } from "react"
import axios from "axios"
import WorkoutDetails from "../componets/WorkoutDetails"
import WorkoutForm from "../componets/WorkoutForm"
import { WorkoutContext } from "../context/workoutContext"

export default function Home() {
    // const [workouts, setWorkouts]= useState(null)
    const {workouts, dispatch}=useContext(WorkoutContext)
    useEffect(()=>{
        const FetchData=async()=>{
            const response  = await axios.get("http://localhost:4000/api/workouts")
            if(response.statusText="OK"){
                // setWorkouts(response.data)
                dispatch({type:'SET_WORKOUTS', payload:response.data})
                console.log(response)
            }
        }
        FetchData()

    },[])
  return (
    <div className='home'>
        <div className="workouts">
            {workouts&& workouts.map((workout, index)=>(
            <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
        </div>
        <WorkoutForm/>
    </div>
  )
}
