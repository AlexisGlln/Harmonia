const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayAction");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const programs = require("./programs/router");

router.use("/programs", programs);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const categories = require("./categories/router");

router.use("/categories", categories);

/* ************************************************************************* */

module.exports = router;