const { Router } = require("express");
const { getDogsbyName } = require("../controllers/getDogsbyName");

const routerGetDogsbyName = Router();

routerGetDogsbyName.get("/dogs", (req, res) => {
    const {  name } = req.query
    try {
        if(!name) res.status(400).json({ "error": "Debe escribir un nombre" });
        res.status(200).json(getDogsbyName(name))
    } catch (error) {
        res.status(404).json({ "error": error.message });
    };
});

module.exports = routerGetDogsbyName;
