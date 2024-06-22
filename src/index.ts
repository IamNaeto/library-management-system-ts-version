import Book from "./Book";
import User from "./User";
import Library from "./Library";

// create a new library instance
const library = new Library();

// Add some books
const book1 = new Book("Things Fall Apart", "Chinua Achebe", "ISBN-1234567809");
const book2 = new Book(
    "Only In Nigeria",
    "Very Rev. Fr. Monsignor Nathaniel Ndiokwere",
    "ISBN-0987654321"
);
const book3 = new Book(
    "Because I Am Involved",
    "Chukwuemeka Odumegwu Ojukwu",
    "ISBN-1357902468"
);
const book4 = new Book(
    "Half Of A Yellow Sun",
    "Chimamanda Ngozi Adichie",
    "ISBN-0246813579"
);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

// Retrieve all the books added to the library
const allBooks = library.books;
console.log("All books", allBooks);

// Remove a book by its ISBN
library.removeBook("ISBN-0246813579");

// Retrieve remaining books after the last book removal
const bookRemains = library.books;
console.log("Remaining books", bookRemains);

// search for a book either by ISBN or name or author
console.log("Book searched by ISBN", library.searchBook("ISBN-1234567809"));
console.log("Book searched by name", library.searchBook("Only In Nigeria"));
console.log(
    "Book searched by author",
    library.searchBook("Chukwuemeka Odumegwu Ojukwu")
);

// Add some users
const user1 = new User("Charles Naeto", "1");
const user2 = new User("Kelvin Klin", "2");
const user3 = new User("John Doe", "3");
const user4 = new User("Philip Clever", "4");
library.addUser(user1);
library.addUser(user2);
library.addUser(user3);
library.addUser(user4);

// Retrieve all the users added to the library
const allUsers = library.users;
console.log("All users", allUsers);

// Remove a user by ID
library.removeUser("4");

// Retrieve remaining users after the last user removal
const userRemains = library.users;
console.log("Remaining users", userRemains);

// Search for a user either by name or id
console.log("User searched by name", library.searchUser("John Doe"));
console.log("User searched by ID", library.searchUser("1"));

// Borrow a book
library.borrowBook("2", "ISBN-0987654321");
library.borrowBook("1", "ISBN-1357902468");

// Retrieve all the users after borrowing books to some
const allUsersAfterBookBorrow = library.users;
console.log("All users after book borrow", allUsersAfterBookBorrow);

// Return a book
library.returnBook("2", "ISBN-0987654321");
library.returnBook("1", "ISBN-1357902468");

// Retrieve all the users after borrowing books to some
const allUsersAfterBookReturn = library.users;
console.log("All users after book return", allUsersAfterBookReturn);

// Check if a book is available
console.log("Is book available?", library.searchBook("ISBN-1357902468"));
