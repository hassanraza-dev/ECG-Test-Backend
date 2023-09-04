const express = require("express");
const {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} = require("../controllers/bookController");

const router = express.Router();

// GET all book
router.get("/", getBooks);

// GET single book
router.get("/:id", getBook);

// POST a new book
router.post("/", createBook);

// DELETE a book
router.delete("/:id", deleteBook);

// UPDATE a book
router.patch("/:id", updateBook);

module.exports = router;
