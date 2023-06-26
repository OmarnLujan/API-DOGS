const { Router } = require("express");
const { getTemperaments } = require("../controllers/getTemperaments");

const routeGetTemperaments= Router();

routeGetTemperaments.get("/temperaments", (req, res) => {
    try {
        res.status(200).json(getTemperaments())
    } catch (error) {
        res.status(404).json({ "error": error.message });
    };
});

module.exports = routeGetTemperaments;
