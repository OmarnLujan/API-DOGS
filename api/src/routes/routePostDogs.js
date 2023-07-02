const { Router } = require("express");
const { getAllDogs, getAPIDogs, getDBDogs } = require("../controllers/getDogs");
const { postDog } = require("../controllers/postDog");
require('dotenv').config();

const routePostDogs = Router();

routePostDogs.post("/", async(req, res) => {
    const { name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperament } = req.body;
    try {
       
        res.status(201).json(await postDog(name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperament));
    } catch (error) {
        res.status(400).send({ "error": error.message });
    };
});

module.exports =  routePostDogs ;
