"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }
}
exports.default = User;
