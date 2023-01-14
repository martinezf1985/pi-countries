import './card.css';
import React from "react";


export default function Card({name, flags, continents}) {
    return (
        <div>
            <img src = { flags }  alt = 'Flag not found' width = '100px' height = '60px'/>
            <br/>
            <h4  className='h4'>{name}</h4>
            <br/>
            <h4 >{continents}</h4>
        </div>
    )
}

























// import React from 'react';


// export default function Card({ name, flags, continents }) {
//     return (
//         <div>
//             <h3>{ name }</h3>
//             <h5>{ continents}</h5>
//             <img src = { flags }  alt = 'Imagen no encontrada' width = '150px' height = '100px'/>
//         </div>
//     );
// }






















//import './card.css';

// const Card = () =>{
//     return(
//         <div key = {props.nombre} className = {card.tarjeta}>
//         <h1>{props.nombre.slice(0,26)}</h1>
//         <h2>{props.continente}</h2>
//         <img type="image/svg+xml" alt="bandera nacional" src={props.bandera} />
//     </div>
//     )
// }