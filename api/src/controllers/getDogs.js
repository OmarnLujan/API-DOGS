const axios = require("axios");
const { API_KEY } = process.env
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
const { Temperament, Dog } = require("../db");

const getAPIDogs = async () => {
  //Informacion desde la API
  const { data } = await axios.get(URL);
  //console.log(data);
  const dogs = await data.map(dato => {
    // Procesos de datos "3 - 6" => "3" and "6"
    const weightMin = parseInt(dato.weight.metric.slice(0, 2).trim());
    const weightMax = parseInt(dato.weight.metric.slice(4).trim());
    const heightMin = parseInt(dato.height.metric.slice(0, 2).trim());
    const heightMax = parseInt(dato.height.metric.slice(4).trim());

    const dog = {
      id: dato.id,
      name: dato.name,
      weightMin: weightMin,
      weightMax: weightMax,
      heightMin: heightMin,
      heightMax: heightMax,
      temperament: dato.temperament,
      life_span: dato.life_span,
      image: `https://cdn2.thedogapi.com/images/${dato.reference_image_id}.jpg`,
      intheDB: false
    };
    //console.log(dog);
    return dog;
  });
  //console.log(dogs);
  return dogs;

};
//console.log(getAPIDogs());


const getDBDogs = async () => {
  //Informacion desde la DB
  const dogs = await Dog.findAll({
    //Trae la la relacion dogTemperament
    include: {
      model: Temperament,
      attributes: ['name'],
      through: {
        attributes: [],
      },
      raw: true,
    }
  });
  const dogsDB = dogs?.map(dbDog => {
    return {
      id: dbDog.id,
      name: dbDog.name,
      weightMin: dbDog.weightMin,
      weightMax: dbDog.weightMax,
      heightMin: dbDog.heightMin,
      heightMax: dbDog.heightMax,
      life_span: dbDog.life_span,
      image: dbDog.image,
      intheDB: dbDog.intheDB,
      temperament: dbDog.temperaments?.map(temperament => temperament.name),
    }
  })
  //console.log(dogs);
  return dogsDB;
}
//console.log(getDBDogs());


// Funcion que trae todo
const getAllDogs = async () => {
  const apiDogs = await getAPIDogs();
  const dbDogs = await getDBDogs();
  const totalDogs = [...apiDogs,...dbDogs]
  //console.log(totalDogs);
  if(totalDogs.length<1){
    throw new Error("No se encontraron perros");
  }
  return totalDogs;
};

//console.log(getAllDogs());
module.exports = {
  getAllDogs, getAPIDogs, getDBDogs
};

