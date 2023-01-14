
import React, {useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getCountries } from '../../actions/index';
 import './activity.css'


function validate(input) {
    let errors = {};
    if(!input.name || input.name.length < 3 || !input.name.match(/^[A-Za-z]+$/) || input.name === '') {
        errors.name =  'Se requiere que ingrese un nombre para la actividad';
    } else if (!input.difficulty) {
        errors.difficulty = 'Se requiere que ingrese una dificultad para la actividad';
    } else if (!input.duration) {
        errors.duration = 'Se requiere que ingrese una duración para la actividad';
    } else if (!input.season) {
        errors.season = 'Se requiere que ingrese una estación para la actividad';
    } else if (!input.countryId) {
        errors.country = 'Se requiere que ingrese un pais para la actividad';
    } 
    return errors;
}

export function ActivityCreate(){
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: []
    })
    const history = useHistory();
    const[errors, setErrors] = useState({})


    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);//ojo aca


    function handleChange(e) {//cada vez que se ejecuta handlechange, al estado input, 
        setInput({//ademas de lo que tiene, se le agrega el target.value
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        //console.log(input);
    }


    function handleSelect(e) {// cuando mando el country, traigo lo que ya habia en el estado y le concateno el target value
        setInput({
            ...input,
            countryId: [...input.countryId, e.target.value]
        })
    }

    //let expReg = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9]+$/;
    function handleSubmit(e) {                
        e.preventDefault();
        //console.log(input);
        if(!input.name || !input.difficulty || !input.duration || !input.season || !input.countryId){
            return alert('Debe ingresar los datos necesarios en todos los campos requeridos');
        } else { 
            dispatch(postActivity(input));
            alert('Actividad creada con éxito');
            setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countryId: []
            })
            history.push('/home');//metodo del router que me redirecciona a la ruta que decida
        } 
    }


    function handleDelete(el) {
        setInput({
            ...input,
            countryId: input.countryId.filter( country => country !==el) // me devuelve el estado nuevo, que es un array, sin el elemento que clickee
        })
    }

//console.log(input.countryId)
    return (
        <div  className='container'>
            <Link to= '/home' ><button className='backButton'>Volver</button></Link>
            <h1 className='title'>Crea tu Actividad!</h1>
            <div>
                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='select'>
                        <label>Nombre de la actividad: </label>
                        <input
                        type= 'text'
                        value= {input.name}
                        name = 'name'
                        autoComplete='off'
                        placeholder='Ingrese nombre de la actividad'
                        onChange={(e) => handleChange(e)}
                        />
                        {errors.name && (
                            <p className='error'>{errors.name}</p> 
                        )}
                    </div>
                    <div className='select'>
                        <label>Dificultad: </label>
                        <select
                        name='difficulty' 
                        value={input.difficulty} 
                        className='selectBox'
                        onChange={(e) => handleChange(e)}>
                            <option value=''>Seleccione la dificultad</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            {errors.difficulty && (
                            <p className='error'>{errors.difficulty}</p>
                        )}
                        </select>
                    </div>
                    <div className='select' >
                        <label>Duración: </label>
                        <input
                            type= 'number'
                            value= {input.duration}
                            name = 'duration'
                            autocomplete='off'
                            min='0'
                            placeholder='Ingresar dato de duración'
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.duration && (
                            <p className='error'>{errors.duration}</p> 
                        )}
                    </div>
                    <div className='select' >
                    <label>Estación: </label>
                        <select 
                            name='season' 
                            value={input.season} 
                            onChange={(e) => handleChange(e)}>
                                <option value=''>Selecciona la estación</option>
                                <option value='Summer'>Verano (Summer)</option>
                                <option value='Autumn'>Otoño (Autumn)</option>
                                <option value='Winter'>Invierno (Winter)</option>
                                <option value='Spring'>Primavera (Spring)</option>
                                {errors.season && (
                            <p className='error'>{errors.season}</p> 
                        )}
                        </select>
                    </div>
                    <div className='select'>
                        <label>Pais: </label>
                            <select onChange={(e) => handleSelect(e)}>
                                {countries.map((country) => (
                                    <option value={country.id} key={country.id}>{country.name}</option> //value={country.id} key={country.id}
                                ))}
                            </select>
                    </div>
                    <br/>
                        <button className='submitButton' type='submit'>Crear actividad</button>
                </form>
                {input.countryId.map(el => 
                    <div className='countryContainer' key={el.name}>
                        <div className='contry'>{el}</div>
                        <button  className='deleteButton' onClick = {()=> handleDelete(el)}>X</button>    
                    </div> )}
            </div>
        </div>
    )
}
























// import React, { useState, useEffect } from 'react'
// import { Link, useHistory } from 'react-router-dom'
// import { postActivity, getCountries } from '.././../actions'
// import { useDispatch, useSelector } from 'react-redux'
// import './activity.css'

// function validate(input) {
//   let errors = {}
//   if (
    // !input.name ||
//     input.name.length < 3 ||
//     !input.name.match(/^[A-Za-z]+$/)
//   ) {
//     errors.name = 'Se requiere que ingrese un nombre para la actividad'
//   } else if (!input.difficulty) {
//     errors.difficulty =
//       'Se requiere que ingrese una dificultad para la actividad'
//   } else if (!input.duration) {
//     errors.duration = 'Se requiere que ingrese una duración para la actividad'
//   } else if (!input.season) {
//     errors.season = 'Se requiere que ingrese una estación para la actividad'
//   } else if (!input.country) {
//     errors.country = 'Se requiere que ingrese un pais para la actividad'
//   }
//   return errors
// }

// export default function ActivityCreate() {
//   const dispatch = useDispatch()
//   const history = useHistory()
//   const countries = useSelector((state) => state.countries)
//   const [errors, setErrors] = useState({})
//   const [input, setInput] = useState({
//     name: '',
//     difficulty: '',
//     duration: '',
//     season: '',
//     country: [],
//   })

//   function handleDelete(el) {
//     setInput({
//       ...input,
//       country: input.country.filter((country) => country !== el), // me devuelve el estado nuevo, que es un array, sin el elemento que clickee
//     })
//   }

//   useEffect(() => {
//     dispatch(getCountries())
//   }, [dispatch])

//   function handleChange(e) {
//     //cada vez que se ejecuta handlechange, al estado input,
//     setInput({
//       //ademas de lo que tiene, se le agrega el target.value
//       ...input,
//       [e.target.name]: e.target.value,
//     })
//     setErrors(
//       validate({
//         ...input,
//         [e.target.name]: e.target.value,
//       }),
//     )
//     console.log(input)
//   }

//   function handleSelect(e) {
//     // cuando mando el country, traigo lo que ya habia en el estado y le concateno el target value
//     setInput({
//       ...input,
//       country: [...input.country, e.target.value],
//     })
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     console.log(input)
//     dispatch(postActivity(input))
//     alert('Actividad creada con éxito')
//     setInput({
//       name: '',
//       difficulty: '',
//       duration: '',
//       season: '',
//       country: [],
//     })
//     history.push('/home')
//   }
//   //useHistory método del router, lo que hace es redirigirme a la ruta que yo le diga

//   return (
//     <div className="container">
//       <Link to="/home">
//         <button className="backButton">Volver</button>
//       </Link>
//       <h1 className="title">Crea tu actividad</h1>
//       <div>
//         <form className="form" onSubmit={(e) => handleSubmit(e)}>
//           <div className="select">
//             <label>Nombre de la actividad:</label>
//             <input
//               type="text"
//               value={input.name}
//               name="name"
//               autocomplete="off"
//               onChange={(e) => handleChange(e)}
//               placeholder="Ingresar nombre de actividad"
//             />
//             {errors.name && <p className="error">{errors.name}</p>}
//           </div>
//           <div className="select">
//             <label>Dificultad:</label>
//             <select
//               name="difficulty"
//               value={input.difficulty}
//               className="selectBox"
//               onChange={(e) => handleChange(e)}
//             >
//               <option value="">Selecciona la dificultad</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//               {errors.difficulty && (
//                 <p className="error">{errors.difficulty}</p>
//               )}
//             </select>
//           </div>
//           <div className="select">
//             <label>Duración:</label>
//             <input
//               //   type= 'time'
//               type="number"
//               value={input.duration}
//               name="duration"
//               autocomplete="off"
//               min="0"
//               onChange={(e) => handleChange(e)}
//               placeholder="Ingresar tiempo de duración"
//             />
//             {errors.duration && <p className="error">{errors.duration}</p>}
//           </div>
//           <div className="select">
//             <label>Estación:</label>
//             <select
//               name="season"
//               value={input.season}
//               onChange={(e) => handleChange(e)}
//             >
//               <option value="">Selecciona la estación</option>
//               <option value="Summer">Summer</option>
//               <option value="Autumn">Autumn</option>
//               <option value="Winter">Winter</option>
//               <option value="Spring">Spring</option>
//               {errors.season && <p className="error">{errors.season}</p>}
//             </select>
//           </div>
//           <div className="select">
//             <label>Pais:</label>
//             <select onChange={(e) => handleSelect(e)}>
//               {countries.map((country) => (
//                 <option value={country.name}>{country.name}</option>
//               ))}
//             </select>
//           </div>
//           <br />
//           <button className="submitButton" type="submit">
//             Crear actividad
//           </button>
//         </form>
//         {input.country.map((el) => (
//           <div className="countryContainer">
//             <div className="country">{el}</div>
//             <button className="deleteButton" onClick={() => handleDelete(el)}>
//               X
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
