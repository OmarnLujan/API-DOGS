const { Router } = require("express");
const { getDogbyId } = require("../controllers/getDogbyId");

const routeGetDogById = Router();

routeGetDogById.get("/:idRaza", async(req, res) => {
    const { idRaza } = req.params
    try {
        const dog =await getDogbyId(idRaza);
        res.status(200).json(dog)

    } catch (error) {
        res.status(404).send({ "error": error.message });
    };
});

module.exports = routeGetDogById;
