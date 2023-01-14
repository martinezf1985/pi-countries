
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getCountries, filterByContinent, orderByName, filterByPopulation, filterByActivity, getActivities} from '../../actions/index';
import Card from '../card/Card';
import Paginado from '../paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar';
import'./home.css'


export default function Home(){

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const allActivities = useSelector((state) => state.activities);
    // eslint-disable-next-line no-unused-vars
    const [orden, setOrden] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const idenxOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = idenxOfLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, idenxOfLastCountry);
    
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const pageValidation = (currentPage) => {
        if(currentPage ===1) {
            return setCountriesPerPage(9);
        } else {
            return setCountriesPerPage(10);
        }
    }

    useEffect( () => {
        pageValidation(currentPage);
    }, [currentPage])

    useEffect (() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);
    

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    };

    function handleFilterContinent(e) {
        dispatch(filterByContinent(e.target.value))}; //va a tomar como payload el valor de cada uno de los value de las option del select
    
    function handleSort (e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
        setOrden(`Ordenado ${e.target.value}`) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    };

    function handleSortPop (e) {
        e.preventDefault();
        dispatch(filterByPopulation(e.target.value));
        setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
        setOrden(`Ordenado ${e.target.value}`) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    };

    function handleFilterByActivities (e) {
        e.preventDefault();
        dispatch(filterByActivity(e.target.value));
        setOrden(e.target.value)
    };

    return (
        <div className='body'>
            <h1>PAISES</h1>
            <Link to='/activity' >Crear Actividad</Link>
            <br/>
            <br/>
            <button onClick={e => {handleClick(e)}} >
                Recargar Paises
            </button>
            <br/>
            <br/>
            <div className='filters'>
                <select onChange={e => handleSort(e)}>
                    <option value=''>Orden Alfabetico</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select onChange={e => handleSortPop(e)}>
                    <option value="All">Filtro por Población</option>
                    <option value="ascpop">↑ Población Ascendente</option>
                    <option value="descpop">↓ Población Descendente</option>
                </select>
                <select onChange={e => handleFilterContinent(e)}>
                    <option value=''>Clasificación por Continentes</option>
                    <option value="Africa">África</option>
                    <option value="Antarctic">Antartida</option>
                    <option value="Americas">América</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select onChange={(e) => handleFilterByActivities(e)} defaultValue='Filter By Activity'>
                    <option value='All'>Filtro por Actividad</option>
                    {allActivities.map(e => (
                        <option value={e.name} key={e.name}>{e.name}</option>
                    ))}
                </select>
            <Paginado
            countriesPerPage = { countriesPerPage }
            allCountries = { allCountries.length }
            paginated = { paginated }
            /> 
            <SearchBar/>
            <br/>

            {
                currentCountries?.map(c => {
                    return(
                        <div className='ordenarPaises'>
                            <Link to={"/home/" + c.id}>
                                <Card key = { c.id } name={c.name} flags={c.flags} continents={c.continents}/>
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};













































































































































// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getCountries, filterByContinent, orderByName, filterByPopulation, filterByActivity, getActivities  } from '../../actions'
// import { Link } from 'react-router-dom'
// import Card from '../card'
// import Paginado from '../paginado'
// import SearchBar from '../searchBar'

// const Home = () => {
//   //aca vamos a realizar la logica de los estados!!!!
//   const dispatch = useDispatch()
//   const allCountries = useSelector((state) => state.countries)
//   const allActivities = useSelector((state) => state.activities);
//   const[orden, setOrden] = useState ('');
//   const[currentPage, setCurrentPage] = useState(1);
//   const [countriesPerPage, setCountriesPerPage] = useState (10);
//   const indexOfLastCountry = currentPage * countriesPerPage;
//   const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
//   const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  
//   const paginado = (pageNumber) => {
//     setCurrentPage(pageNumber);
// }

// const pageValidation = (currentPage) => {
//   if(currentPage ===1) {
//       return setCountriesPerPage(9);
//   } else {
//       return setCountriesPerPage(10);
//   }
// }

// useEffect( () => {
//   pageValidation(currentPage);
// }, [currentPage])


//   useEffect(() => {
//     dispatch(getCountries());
//     dispatch(getActivities());
//   }, [dispatch])

//   // e.preventDefault es solo un preventivo para que no s eme recargue la pagina y no se rompa todo
//   const handleClick = (e) => {
//     e.preventDefault()
//     dispatch(getCountries())
//   }

//   function handleFilterContinent(e) {
//     dispatch(filterByContinent(e.target.value));                                                       //va a tomar como payload el valor de cada uno de los value de las option del select
// }

// function handleSort (e) {
//     e.preventDefault();
//     dispatch(orderByName(e.target.value));
//     setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
//     setOrden(`Ordenado ${e.target.value}`) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
// };

// function handleSortPop (e) {
//     e.preventDefault();
//     dispatch(filterByPopulation(e.target.value));
//     setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
//     setOrden(`Ordenado ${e.target.value}`) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
// };
// function handleFilterByActivities (e) {
//   e.preventDefault();
//   dispatch(filterByActivity(e.target.value));
//   setOrden(e.target.value)
// };

//   return (
//     <div>
//       <div>
//         <Link to="/activity">crear Actividad</Link>
//         <h1>Countries</h1>
//         {/* aca  hace una funcion en el boton que directamente te despacha la accion en ves de hacer  una funcion abajo y solo pasar el handleClick */}
//         <br/>
//             <br/>
//         <button
//           onClick={(e) => {
//             handleClick(e)}}
//         >
//           volver a cargar todos los Paises
//         </button>
//         <br/>
//             <br/>º
//       </div>
//       <div>
//         <select onChange={e => handleSort(e)}>
//           <option hiddend=''>Orden alfabéticamente</option>
//           <option value="asc">A-Z</option>
//           <option value="desc">Z-A</option>
//         </select>
//         <select onChange={e => handleSortPop(e)}>
//         <option value="All">Filtro por Población</option>
//           <option value="ascpop">Población Ascendente</option>
//           <option value="descpop">Población Descendente</option>
//         </select>
//         <select  onChange={e => handleFilterContinent(e)}>
//           {/* <option value="All">Todos</option> */}
//           <option value="Africa">África</option>
//           <option value="Americas">América</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europa</option>
//           <option value="Oceania">Oceania</option>
//           <option value="Antartic">Antartic</option>
//         </select>
//         <select onChange={(e) => handleFilterByActivities(e)} defaultValue='Filter By Activity'>
//                     <option value='All'>Filtro por Actividad</option>
//                     {allActivities.map(e => (
//                         <option value={e.name} key={e.name}>{e.name}</option>
//                     ))}
//                 </select>
//         <Paginado
//             countriesPerPage = { countriesPerPage }
//             allCountries = { allCountries.length }
//             paginado = { paginado }
//             /> 
//              <SearchBar />

//         {
//           currentCountries?.map((c) => {
//             return (
//               <Link to = { '/home/' + c.id }>
//               <div>
//                <Card name={c.name} flags={c.flags} continents={c.continents} key={c.id} />
//               </div>
//               </Link>
//             )
//           })}
//       </div>
//     </div>
//   )
// }

// export default Home
