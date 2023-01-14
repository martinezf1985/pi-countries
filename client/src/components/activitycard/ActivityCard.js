import React from 'react';
import './act.css'

const ActivityCard = (activity) => {
    return (
        <div> 
            {activity && (
        <div>
                <h2 className='imput'><b>Actividad: </b>{activity.name}</h2>
            <br/>
                <h2 className='imput'><b>Dificultad: </b>{activity.difficulty}</h2>
                <br/>
                <h2 className='imput'><b>Duration: </b>{activity.duration} horas</h2>
                <br/>
                <h2 className='imput'><b>Temporada: </b>{activity.season}</h2>
                
            </div>  
            )}
        </div>
    )
}

export default ActivityCard