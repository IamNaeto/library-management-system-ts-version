# Library Management System

This project is a simple library management system implemented in TypeScript using ES6 classes and features. It allows users to manage books, users, and their borrowed books.

## Requirements

1. **Book Management**

   - Add a book
   - Remove a book
   - Search for a book by title, author, or ISBN

2. **User Management**

   - Add a user
   - Remove a user
   - Search for a user by name or ID

3. **Borrowing System**
   - Allow a user to borrow a book
   - Allow a user to return a book
   - Check if a book is available

## Instructions

### 1. Setup the Project

- Create the following files in the `src` directory:
  - `Book.ts`
  - `User.ts`
  - `Library.ts`
  - `index.ts`

### 2. Create Classes

- **Book Class**: Represents a book with properties such as title, author, isbn, and isAvailable.
- **User Class**: Represents a user with properties such as name, id, and borrowedBooks (an array to store borrowed books).
- **Library Class**: Manages the books and users with methods to add, remove, search for books and users, as well as to borrow and return books.

### 3. Implement Methods

- **Library Class Methods**:
  - `addBook(book: Book): void`
  - `removeBook(isbn: string): void`
  - `searchBook(query: string): Book[]`
  - `addUser(user: User): void`
  - `removeUser(id: string): void`
  - `searchUser(query: string): User[]`
  - `borrowBook(userId: string, isbn: string): boolean`
  - `returnBook(userId: string, isbn: string): void`
  - `isBookAvailable(isbn: string): boolean`

### 4. Use TypeScript Features

- Use TypeScript for creating `Book`, `User`, and `Library` classes.
- Utilize TypeScript features such as type annotations and interfaces where appropriate.
- Use ES6 modules to split the classes into separate files and import them as needed.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IamNaeto/library-management-system-ts-version.git
   ```

2. Navigate to the project directory:

   ```bash
   cd library-management-system-ts-version
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Compile the TypeScript files:

   ```bash
   npm run build
   ```

5. Run the application:

   ```bash
   npm start
   ```
