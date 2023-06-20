const axios = require("axios");

const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}` ;
const { Temperament, Dog }=require("../db");

const getDogs = async (request, response) => {
      const { id } = request.params;
      const { data } = await axios.get(`${URL}/${id}`);
      const dog = {
        id: id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        life_span: data.life_span,
        image: data.image,
    }
    return dog;
  };
  module.exports = getDogs;
  
