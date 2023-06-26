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
      image: dato.image.url,
      IntheDB: false
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
        attributes: [],//asociación de muchos a muchos entre Dog y Temperament
      },
    }
  });
  console.log(dogs);
  return dogs;
}
console.log(getDBDogs());


// Funcion que trae todo
const getAllDogs = async () => {
  const apiDogs = await getAPIDogs();
  const dbDogs = await getDBDogs();
  const totalDogs = apiDogs.concat(dbDogs)
  //console.log(totalDogs);
  if(totalDogs.length<1){
    throw Error("No se encontraron perros");
  }
  return totalDogs;
};

//console.log(getAllDogs());
module.exports = {
  getAllDogs, getAPIDogs, getDBDogs
};

