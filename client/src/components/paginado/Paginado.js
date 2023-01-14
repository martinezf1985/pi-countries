



import React from "react";
import s from './paginado.css';

export default function Paginado ({ countriesPerPage, allCountries, paginated }) {
    const pageNumbers = [];
    const pageSecToFinish = allCountries - 9;
    pageNumbers.push(1);

    /* for (let i=2; i <= Math.ceil(((allCountries-countriesPerPage)/(countriesPerPage))+1); i++) {
        pageNumbers.push(i+1);
    } */
    
    for (let i=2; i <= Math.ceil((pageSecToFinish/countriesPerPage)+1); i++) {
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className='footer'>
                { pageNumbers && 
                pageNumbers.map(number => (
                    <li className='paginationButton' key={number}>      
                        <button className={s.paginationButton} onClick={() => paginated(number)}>{number}</button> 
                    </li> 
                ))}
            </ul>
        </nav>
    )
}


































































// import React from 'react'
// import './paginado.css'

// const Paginado = ({countriesPerPage, allCountries, paginado}) => {
//     const pageNumbers = [];

//     const pageSecToFinish = allCountries - 9;
//     pageNumbers.push(1);
    
//     for (let i=2; i<=Math.ceil(pageSecToFinish/10); i++) {
//         pageNumbers.push(i);
//     }
//     return(
//         <nav>
//             <ul className='footer'>
//                 { pageNumbers && 
//                 pageNumbers.map(number => (
//                     <li  key={number}>      
//                         <button  className='paginationButton' onClick={() => paginado(number)}>{number}</button> 
//                     </li> 
//                 ))}
//             </ul>
//         </nav>
//     )
// }

// export default Paginado