const booksService = require("../services/books.service");

const getAllBooks = (req, res) => {
  const result = booksService.getAllBooks();
  res.send(result);
};

module.exports = {
  getAllBooks,
};
