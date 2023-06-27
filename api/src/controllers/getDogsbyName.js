const { getAllDogs ,getAPIDogs} = require("./getDogs");



const getDogsbyName = async (name) => {
    const alldogs = await getAllDogs();
    const dogs = alldogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
    if (!dogs.length) {
        throw new Error("Esta raza no existe");
    }
    console.log(dogs);
    return dogs;
};
console.log(getDogsbyName("Miniature"))
console.log(getDogsbyName("Pepito"))

module.exports = { getDogsbyName };

