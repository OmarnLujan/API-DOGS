const { getAllDogs} = require("./getDogs");



const getDogbyId = async (id) => {
  const alldogs=await getAllDogs();
  const dog= alldogs.filter(d=>d.id===id)
    if(!dog.length){
      throw Error("Esta raza no existe");
    }
    console.log(dog);
    return dog;
  };
//console.log(getDogbyId(2))


  module.exports = {getDogbyId};
  
