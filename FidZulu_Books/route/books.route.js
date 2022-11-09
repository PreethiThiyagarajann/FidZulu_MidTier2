const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getTeam,
  insertBook,

} = require("../controller/books.controller");

router
    .route("/books")
    .get(getAllBooks)
    .post(insertBook)

router
    .route("/team")
    .get(getTeam)

module.exports = router;