import Book from "./Book";
import User from "./User";

class Library {
    books: Book[];
    users: User[];

    constructor() {
        this.books = [];
        this.users = [];
    }

    // Add a book to the library
    addBook(book: Book): void {
        this.books.push(book);
    }

    // Remove a book from the library by ISBN
    removeBook(isbn: string): void {
        this.books = this.books.filter((book) => book.isbn !== isbn);
    }

    // Search for a book by title, author or ISBN
    searchBook(query: string): Book[] {
        return this.books.filter(
            (book) =>
                book.title.includes(query) ||
                book.author.includes(query) ||
                book.isbn.includes(query)
        );
    }

    // Add a user to the library
    addUser(user: User): void {
        this.users.push(user);
    }

    // Remove a user from the library by ID
    removeUser(id: string): void {
        this.users = this.users.filter((user) => user.id !== id);
    }

    // Search for a user by name or ID
    searchUser(query: string): User[] {
        return this.users.filter(
            (user) => user.name.includes(query) || user.id.includes(query)
        );
    }

    // Borrow a book for a user
    borrowBook(userId: string, isbn: string): boolean {
        const user = this.users.find((user) => user.id === userId);
        const book = this.books.find((book) => book.isbn === isbn);

        if (user && book && book.isAvailable) {
            user.borrowedBooks.push(book);
            book.isAvailable = false;
            return true;
        }

        return false;
    }

    // Return a book for a user
    returnBook(userId: string, isbn: string): void {
        const user = this.users.find((user) => user.id === userId);
        const book = this.books.find((book) => book.isbn === isbn);

        if (user && book) {
            book.isAvailable = true;
            user.borrowedBooks = user.borrowedBooks.filter((b) => b.isbn !== isbn);
        }
    }

    // Check if a book is available
    isBookAvailable(isbn: string): boolean {
        const book = this.books.find((book) => book.isbn === isbn);
        return book ? book.isAvailable : false;
    }
}

export default Library;
