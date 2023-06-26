const { Router } = require("express");
const { getDogbyId } = require("../controllers/getDogById");

const routeGetDogById = Router();

routeGetDogById.get("/:idRaza", (req, res) => {
    const { idRaza } = req.params
    try {
        res.status(200).json(getDogbyId(idRaza))

    } catch (error) {
        res.status(404).json({ "error": error.message });
    };
});

module.exports = routeGetDogById;
