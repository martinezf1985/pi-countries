//route/countryRoute.js
const { Router } = require("express");
const { getAllCountries } = require('../controllers/countryController.js')
const { Op } = require('sequelize');
const { Country, Activity } = require("../db");
const router = Router();


router.get('/', async (req, res, next) => {
  try {
    const name = req.query.name
    let countriesTotal = await getAllCountries()
    if(name) {
      countriesTotal = { 
        where: {
          name: { [Op.iLike]: `%${name}%`}
        }
      }
    }
    const nameSearch = await Country.findAll({...countriesTotal, include: {
      model: Activity,
        attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
        through: {attributes: []},
        }})
        
        if(!nameSearch.length) 
        return res.status(404).send(`The Country '${name}' not found`)
        res.json(nameSearch)
  } catch (error) {
    next(error)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
      let searchId = await Country.findOne({
        where: {
          id: id.toUpperCase(),
        },
        include:{
          model: Activity,
          attributes: ['id','name','difficulty','duration','season'],
          through: { attributes: [] },
        }
      })
        
      if(!searchId) {
        res.status(404).send(`'${id}' not found`)
      } else {
        res.json(searchId)
      }
  } catch (error) {
    next(error)
  }
})

module.exports = router;

























// const { Router } = require("express");
// const { getAllCountries } = require('../controllers/countryController.js')

// const { Op } = require('sequelize');
// const { Pais, Actividad } = require("../db");
// const router = Router();


// router.get('/', async (req, res, next) => {
//   try {
//     const name = req.query.name
//     let countriesTotal = await getAllCountries()
//     if(name) {
//       countriesTotal = { 
//         where: {
//           name: { [Op.iLike]: `%${name}%`}
//         }
//       }
//     }
//     const nameSearch = await Pais.findAll({...countriesTotal, include: {
//       model: Actividad,
//         attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
//         through: {attributes: []},
//         }})
        
//         if(!nameSearch.length) 
//         return res.status(404).send(`The Country '${name}' not found`)
//         res.json(nameSearch)
//   } catch (error) {
//     next(error)
//   }
// });

// router.get('/:id', async (req, res, next) => {
//   try {
//     let id = req.params.id;
//       let searchId = await Pais.findOne({
//         where: {
//           id: id.toUpperCase(),
//         },
//         include:{
//           model: Actividad,
//           attributes: ['id','name','difficulty','duration','season'],
//           through: { attributes: [] },
//         }
//       })
        
//       if(!searchId) {
//         res.status(404).send(`'${id}' not found`)
//       } else {
//         res.json(searchId)
//       }
//   } catch (error) {
//     next(error)
//   }
// })

// module.exports = router;










































































































// const { Router } = require("express");
// const axios = require("axios");
// const { Pais, Actividad } = require("../db");
// const router = Router();

// const getApiInfo = async () => {
//   try {
//     const apiUrl = await axios.get("https://restcountries.com/v3/all");
//     const apiInfo = await apiUrl.data.map((el) => {
//       return {
//         id: el.cca3,
//         name: el.name.common,
//         flags: el.flags[0],
//         continents: el.continents[0],
//         capital:
//           typeof el.capital !== "undefined" ? el.capital[0] : "Capital not found",
//         subregion: el.subregion,
//         area: el.area,
//         population: el.population,
//       };
//     });
//     return apiInfo;
//   } catch (error) {
//     console.log('There is an error in the apiInfo')
//   }
// };

// const getDbInfo = async () => {
//   return await Pais.findAll({
//     include: {
//       model: Actividad,
//       attibutes: ['name'],
//       through: {
//         attibutes: [],
//       },
//     }
//   })
// };

// const getAllCountries = async () => {
//   const apiInfo = await getApiInfo();
//   const dbInfo = await getDbInfo();
//   const infoTotal = apiInfo.concat(dbInfo);
//   return infoTotal
// }

// router.get('/', async (req, res, next) => {
//   try {
//     const name = req.query.name
//     let countriesTotal = await getAllCountries()
//     if(name) {
//       const countryName = await countriesTotal.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
//       countryName.length ? 
//       res.status(200).send(countryName) :
//       res.status(404).send('Country not found');
//     } else {
//         res.status(200).send(countriesTotal)
//     }
//   } catch (error) {
//     next(error)
//   }
// })

// router.get('/:id', async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const countriesTotal = await getAllCountries()
//     if(id){
//       let countryId = await countriesTotal.filter(c => c.id == id)
//       countryId.length ?
//       res.status(200).json(countryId) :
//       res.status(404).send('Country not found')
//     }
//   } catch (error) {
//     next(error)
//   }
// })


// //funcion para guardar datos de la api en la db
// const copyDb=async()=>{
//   const copia =  await axios.get("https://restcountries.com/v3/all")
//   await copia.data.map((el) => {
//       Pais.findOrCreate({
//           where: { id: el.cca3 },
//           defaults: {
//               id: el.cca3,
//               name: removeAccents(el.name.common),
//               flag: el.flags[0],
//               continents: el.continents[0],
//               capital: el.capital,
//               subregion: el.subregion || 'has no subregion',
//               population: el.population,
//               area: el.area
//           }
//       })
//   });
//   const data = await Pais.findAll({
//       order:[['name',"ASC"]],
//       include:{
//       model: Actividad,
//       attributes: ['name']
//   }
// })
//   return data;
// }





// module.exports = router;




