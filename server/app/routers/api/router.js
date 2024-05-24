const express = require("express");

const router = express.Router();


/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const { sayWelcome } = require("../../controllers/sayAction");

router.get("/", sayWelcome);

const programs = require("./programs/router");

router.use("/programs", programs);

/* ************************************************************************* */

module.exports = router;