




import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetails } from "../../actions";
import ActivityCard from "../activitycard/ActivityCard";
 import './detail.css'

export function Details (props) {
    //console.log(props) 
    const dispatch = useDispatch();

    useEffect(() => {
        //console.log(props)
        dispatch(getCountryDetails(props.match.params.id)); //con esto accedo al id 
    }, [dispatch, props, props.match.params.id]);

    const myCountry = useSelector ((state) => state.detail)
    //console.log(myCountry)

    return (
        <div>
            {
                <div >
                    <h1 className='title'>Pais: {myCountry.name} ({myCountry.id})</h1>
                    <img src = { myCountry.flags }  alt = {myCountry.name} width = '150px' height = '80px'/>
                    <br/>
                    <h3 className='capital'>Capital: {myCountry.capital}</h3>
                    <br/>
                    <h2 className='continent'>Continente: {myCountry.continents}</h2>
                    <br/>
                    <h2  className='subregion'>Subregión: {myCountry.subregion}</h2>
                    <br/>
                    <h2  className='poblacion'>Población: {myCountry.population} habitantes</h2>
                    <br/>
                    <h2   className='area'>Área: {myCountry.area} km2</h2>
                    <br/>
                    <br/>
                    <br/>
                </div>
                } 
                    {
                        myCountry.activities?.map((activity, index) => 
                            <ActivityCard
                            name={activity.name}
                            difficulty={activity.difficulty}
                            duration={activity.duration}
                            season={activity.season}
                            key={index}
                        />)
                    }
                    <br/>
                    <Link to = '/home'> 
                        <button >Volver</button>
                    </Link>
                </div>
    
)
    }








































































// import React from "react";
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCountryDetails } from '../../actions';
// import { useEffect } from "react";
// import ActivityCard from '../activitycard'


// export const Details = (props)=>{
//     console.log(props) 
//     const dispatch = useDispatch();

//     useEffect(() => {
//         //console.log(props)
//         dispatch(getCountryDetails(props.match.params.id)); //con esto accedo al id 
//     }, [dispatch, props, props.match.params.id]);

//     const myCountry = useSelector ((state) => state.detail)
//     //console.log(myCountry)

//         return (
//                 <div>
//                     {
//                         <div>
//                             <h1>Pais: {myCountry.name} ({myCountry.id})</h1>
//                             <br/>
//                             <img src = { myCountry.flags }  alt = {myCountry.name} width = '150px' height = '80px'/>
//                             <br/>
//                             <h2>Continente: {myCountry.region}</h2>
//                             <br/>
//                             <h2>Población: {myCountry.population} habitantes</h2>
//                             <br/>
//                             <h2>Capital: {myCountry.capital}</h2>
//                             <br/>
//                             <h2>Área: {myCountry.area} km2</h2>
//                             <br/>
//                             <h2>Subregión: {myCountry.subregion}</h2>
                            
//                         </div>
//                     } 
                    

// {myCountry.activities?.map((e) => 
//         <ActivityCard
//         name={e.name}
//         difficulty={e.difficulty}
//         duration={e.duration}
//         season={e.season}
//         key={e.key}
//        />)}
// <br/>
// <br/>
// <br/>
// <Link to = '/home'> <button>Volver</button></Link>

//                 </div>
    
// )
//     }




// export default Details