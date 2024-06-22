import Book from "./Book";

class User {
    name: string;
    id: string;
    borrowedBooks: Book[];

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }
}

export default User;
