class Book {
    title: string;
    author: string;
    isbn: string;
    isAvailable: boolean;

    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }
}

export default Book;
