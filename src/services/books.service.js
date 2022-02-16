const authors = require("../assets/authors.json");
const books = require("../assets/books.json");

const getAllBooks = () => {
  const result = books.reduce((acc, curr) => {
    const book = { ...curr };
    const filterAuthor = authors.filter(
      (author) => author.books && author.books.includes(book.title)
    );
    if (filterAuthor.length > 0) {
      const sameAuthor = filterAuthor.reduce(
        (a, b) => [...a, ...b.books].filter((title) => title !== book.title),
        []
      );
      book.sameAuthor = sameAuthor;
    }
    acc.push(book);
    return acc;
  }, []);
  return result;
};

module.exports = {
  getAllBooks,
};
