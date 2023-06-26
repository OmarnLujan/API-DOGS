const axios = require("axios");
const { API_KEY } = process.env
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
const { Temperament, Dog } = require("../db");

const getTemperaments = async () => {
    //Informacion desde la API
    const { data } = await axios.get(URL);
    //console.log(data);

    const dogs = await data.map(dato => {
        if (!dato.temperament) {
            throw Error("No se encontraron temperamentos");
        }
            // Procesos de datos "Temperamento1,  Temperamento2" =>["Temperamento1","Temperamento2"]  
            let temperaments = dato.temperament.split(",").map(t => t.trim());

            //console.log(temperaments);

            temperaments.forEach((temp) => {
                // crea el temp en la bd si no esta creado ya
                Temperament.findOrCreate({ 
                    where: { name: temp }, 
                });
            });
             //console.log(temperaments);
            return temperaments
        
    });
    

    return dogs;

};
//console.log(getTemperaments());

module.exports = { getTemperaments };
