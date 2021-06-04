class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

//   // Create a book
// const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "1234567890");



class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, isbn: ${isbn}`)
      }
    }

    deleteBook(isbn) {
        let index = 0
        let indexToSplice = null;
        for (const book of this._books) {
            if (isbn === book.isbn) {
                console.log("Found book!", book, "Index in _books:", index)
                indexToSplice = index;
            }
            index += 1;
        }
        this._books.splice(indexToSplice)
    }


  };


  // Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
// const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018");

// Add 2 books
const book2 = new Book("1984", "George Orwell", "06/08/1949", "1234567890");
const book3 = new Book("High Republic", "Charles Soule", "01/05/2021", "0987654321");

// Add book to library and output library count and books
// library.addBook(atomicHabits);
library.addBook(book2);
library.addBook(book3);
// console.log(`Book count: ${library.count}`);
// library.listBooks();

// Create books
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
const oceanPrey = new Book("Atomic Habits", "John Sandford", "04/13/2021", "1398505501");

// Add books to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();
