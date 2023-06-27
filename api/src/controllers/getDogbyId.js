const { getAllDogs, getAPIDogs } = require("./getDogs");



const getDogbyId = async (id) => {
  const alldogs = await getAllDogs();
  let dog;
  if (+id < 175) {
    dog = alldogs.filter(d => d.id === +id)
  } else {
    dog = alldogs.filter(d => d.id === id)
  }
  if (dog.length < 1) {
    throw new Error("Esta raza no existe");
  }
  //console.log(dog[0]);
  return dog[0];
};
//console.log(getDogbyId(2))


module.exports = { getDogbyId };

