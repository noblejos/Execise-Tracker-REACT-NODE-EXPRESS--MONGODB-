import { useEffect, useState } from "react"
import axios from "axios"
import WorkoutDetails from "../componets/WorkoutDetails"

export default function Home() {
    const [workouts, setWorkouts]= useState(null)
    useEffect(()=>{
        const FetchData=async()=>{
            const response  = await axios.get("http://localhost:4000/api/workouts")
            if(response.statusText="OK"){
                setWorkouts(response.data)
                console.log(response.data)
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
    </div>
  )
}
