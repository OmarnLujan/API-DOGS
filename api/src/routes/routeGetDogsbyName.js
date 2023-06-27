const { Router } = require("express");
const { getDogsbyName } = require("../controllers/getDogsbyName");

const routerGetDogsbyName = Router();

routerGetDogsbyName.get("/", async (req, res) => {
    const { name } = req.query
    try {
        if (!name) res.status(400).json({ "error": "Debe escribir un nombre" });
        const dog = await getDogsbyName(name);
        res.status(200).json(dog)
    } catch (error) {
        res.status(404).json({ "error": error.message });
    };
});

module.exports = routerGetDogsbyName;
