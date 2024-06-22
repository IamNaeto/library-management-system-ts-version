"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }
}
exports.default = Book;
