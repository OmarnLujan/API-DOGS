const { Router } = require('express');
const routerGetDogs = require("./routeGetDogs")
const routerGetDogsbyName = require("./routeGetDogsbyName")
const routeGetDogById = require("./routeGetDogById")
const routePostDogs = require("./routePostDogs")
const routeGetTemperaments = require("./routeGetTemperaments")
 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", routerGetDogs);
router.use("/dogs", routerGetDogsbyName);
router.use("/dogs", routeGetDogById);
router.use("/dogs", routePostDogs);
router.use("/temperaments", routeGetTemperaments);


module.exports = router;
