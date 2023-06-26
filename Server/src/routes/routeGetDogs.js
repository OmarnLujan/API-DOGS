const { Router } = require("express");
const { getAllDogs, getAPIDogs, getDBDogs } = require("../controllers/getDogs");

const routerGetDogs = Router();

routerGetDogs.get("/dogs", (req, res) => {
    try {
        res.status(200).json(getAllDogs())

    } catch (error) {
        res.status(400).json({ "error": error.message });
    };
});

module.exports = routerGetDogs;
