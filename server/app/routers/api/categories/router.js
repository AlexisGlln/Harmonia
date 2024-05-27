const express = require("express");

const router = express.Router();

const { getCategories, getCategoryById } = require("../../../controllers/categoryActions");

router.get("/", getCategories);

router.get("/:id", getCategoryById);

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */

/* ************************************************************************* */

module.exports = router;
