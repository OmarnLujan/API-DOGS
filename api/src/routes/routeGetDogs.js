const { Router } = require("express");
const { getAllDogs, getAPIDogs, getDBDogs } = require("../controllers/getDogs");

const routerGetDogs = Router();

routerGetDogs.get("/all",async (req, res) => {
    try {
        const dogs = await getAllDogs();
        res.status(200).json(dogs)

    } catch (error) {
        res.status(400).json({ "error": error.message });
    };
});

module.exports = routerGetDogs;
