const express = require("express");
const booksController = require("../controllers/books.controller");

const router = express.Router();

router.route("/all").get(booksController.getAllBooks);

module.exports = router;
