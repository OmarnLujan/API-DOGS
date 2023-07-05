const { getAllDogs } = require("./getDogs");
const { Dog, Temperament } = require("../db");
const { getTemperaments } = require("./getTemperaments");



const postDog = async (name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperament) => {
    console.log()
    const alldogs = await getAllDogs();
    const dogs = alldogs.filter(d => d.name === name)



    if (dogs.length) {
        throw new Error("La raza ya existe");
    }
    if (!name || !heightMax || !heightMin || !weightMin || !weightMax || !life_span || !image || !temperament) {
        throw new Error("Faltan datos");
    }
    if (heightMax < heightMin || weightMax < weightMin) {
        throw new Error("Los datos minimos no pueden ser mayor a los datos maximos");
    }
    if (life_span < 1) throw new Error("Datos invalidos");

    // se verifica si la tabla de temperamento esta creada, sino la crea
    const TemperamentCount = await Temperament.count();
    if (TemperamentCount === 0) {
        await getTemperaments();
    }
    //Crea una promesa y busca si existe el temperamento
    const tempsEncontrados = await Promise.all(
        temperament.map(async (temp) => {
            const tempEncontrado = await Temperament.findOne({ where: { name: temp } });
            if (!tempEncontrado) {
                throw new Error(`El tipo de temperamento ${temp} no existe`);
            }
            return tempEncontrado;
        })
    ); //https://biotrendies.com/wp-content/uploads/2015/07/lechuga.jpg

    function capitalizeWords(inputString) {
        const words = inputString.toLowerCase().split(' ');

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        return words.join(' ');
    }
    name = capitalizeWords(name)
    const newDog = await Dog.create({
        name: name,
        heightMin: heightMin,
        heightMax: heightMax,
        weightMin: weightMin,
        weightMax: weightMax,
        life_span: life_span,
        image: image,
    });


    // Asocia los temps al perro.
    await newDog.addTemperament(tempsEncontrados);

    //console.log(newDog);
    return "Raza creada";
};
/* let dog2 = {
    name: "pepito",
    heightMin: 2,
    heightMax: 4,
    weightMin: 10,
    weightMax: 12,
    life_span: 10,
    image: "image",
    temperament: ["Bubbly", "Curius"]
} */
//postDog("Gaba",2,4,10,12,12,"image",["Bubbly", "Curious"]);
//

module.exports = { postDog };

