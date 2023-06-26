const { Router } = require("express");
const { getAllDogs, getAPIDogs, getDBDogs } = require("../controllers/getDogs");
const { postDog } = require("../controllers/postDog");

const routePostDogs = Router();

routePostDogs.get("/dogs", (req, res) => {
    const { name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperament } = req.query
    let dog = {
        name: "pepe",
        heightMin: 2,
        heightMax: 4,
        weightMin: 10,
        weightMax: 12,
        life_span: 10,
        image: "image",
        temperament: "Curious"
    }
    try {
        postDog(dog)
        res.status(201).send("Raza creada")
    } catch (error) {
        res.status(400).json({ "error": error.message });
    };
});

module.exports =  routePostDogs ;
