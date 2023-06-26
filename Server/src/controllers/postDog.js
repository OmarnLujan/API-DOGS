const { getAllDogs, getDBDogs } = require("./getDogs");
const { Temperament, Dog } = require("../db");



const postDog = async (dog) => {
    const { name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperament } = dog;
    const alldogs = await getAllDogs();
    const dogs = alldogs.filter(d => d.name === name)
    // Mapeo de Objeto Relacionado
    let DBtemperament = await Temperament.findOne({
        where: { name: temperament }
    });

    if (dogs.length) {
        throw Error("La raza ya existe");
    }
    if (!name || !heightMax || !heightMin || !weightMin || !weightMax || !life_span || !image || !temperament) {
        throw Error("Faltan datos");
    }
    if (heightMax < heightMin || weightMax < weightMin) {
        throw Error("Los datos minimos no pueden ser mayor a los datos maximos");
    }
    if (life_span < 1) throw Error("Datos invalidos");

    //if (!IDtemperament) throw Error("Temperamento invalido");

    const newDog = await Dog.create({
        name: name,
        heightMin: heightMin,
        heightMax: heightMax,
        weightMin: weightMin,
        weightMax: weightMax,
        life_span: life_span,
        image: image,
    });
     await newDog.addTemperament(DBtemperament); 

    console.log(newDog);
    return newDog;
};
let dog = {
    name: "pepe",
    heightMin: 2,
    heightMax: 4,
    weightMin: 10,
    weightMax: 12,
    life_span: 10,
    image: "image",
    temperament:"Curius"
}
console.log(postDog(dog))


module.exports = { postDog };

