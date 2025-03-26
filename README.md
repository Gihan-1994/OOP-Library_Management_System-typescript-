# Library Management System

## 📖 Overview

The **Library Management System** is a simple TypeScript and Node.js application designed to manage books, users, and borrowing history. It provides functionalities to add books, borrow books, return books, and manage the library catalogue.

## 🚀 Features

- **Book Management**: Add, display, and track books in the library.
- **User Management**: Register users and track their borrow history.
- **Borrowing System**: Borrow and return books with real-time status updates.
- **Library Catalogue**: View all books, available books, and borrowed books.
- **Search Functionality**: Find books by title.

## 🏗️ Project Structure

```
├── index.html
├── library_management_sytem.iml
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── Library_Management_System.png
│   ├── Library_Management_System.puml
│   ├── main.ts
│   ├── modules
│   │   ├── Book.ts
│   │   ├── User.ts
│   │   ├── LibraryCatalogue.ts
│   └── vite-env.d.ts
└── tsconfig.json
```

## 🛠️ Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [TypeScript](https://www.typescriptlang.org/)
- ts-node
- [Vite](https://vitejs.dev/)

### Steps to Install

1. Clone the repository:
    
    ```bash
    git clone https://github.com/yourusername/library-management-system.git
    cd library-management-system
    ```
    
2. Install dependencies:
    
    ```bash
    npm install
    ```
    

## 🔧 Usage

### Running the Project

Start the application with the following command:

```bash
npm start
```

### Sample Usage in `main.ts`

```tsx
import { User } from "./modules/User";
import { LibraryCatalogue } from "./modules/LibraryCatalogue";
import { Book } from "./modules/Book";

const libraryCatalogue = new LibraryCatalogue();
libraryCatalogue.addItem(new Book("The Great Gatsby", 1, "F. Scott Fitzgerald", "978-3-16-148410-0"));

const user1 = new User("John Doe", "john@example.com");
user1.borrowBook("The Great Gatsby", libraryCatalogue);
user1.manageLibrary();
```

## 📜 Modules Description

### 📚 Book Module (`src/modules/Book.ts`)

Manages book details and borrowing status.

### Key Methods:

- `display()`: Show book details.
- `markAsBorrowed()`: Marks a book as borrowed.
- `markAsReturned()`: Marks a book as returned.

### 👤 User Module (`src/modules/User.ts`)

Manages users and their borrow history.

### Key Methods:

- `borrowBook(bookTitle: string, libraryCatalogue: LibraryCatalogue)`: Borrow a book.
- `returnBook(bookTitle: string)`: Return a borrowed book.
- `manageLibrary()`: Displays all users and their borrowed books.

### 📖 Library Catalogue (`src/modules/LibraryCatalogue.ts`)

Manages books within the library.

### Key Methods:

- `addItem(book: Book)`: Add a book to the library.
- `displayAllItems()`: Show all books.
- `displayAvailableItems()`: Show only available books.
- `displayBorrowedItems()`: Show borrowed books.
- `findAvailableItemByTitle(title: string)`: Search for a book by title.

## 🛠️ Configuration

### TypeScript Configuration (`tsconfig.json`)

```tsx
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "noUnusedLocals": true
  },
  "include": ["src"]
}
```

## 📦 Dependencies

```tsx
{
  "devDependencies": {
    "@types/node": "^22.13.13",
    "ts-node": "^10.9.2",
    "typescript": "~5.7.2",
    "vite": "^6.2.0"
  }
}
```

## 

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📞 Contact

For any inquiries, please contact Nggp-1994

---

✨ Happy Coding! 🚀

## UML Class Diagram

![Image](https://github.com/user-attachments/assets/884bcdf2-4e6f-497e-87ed-832d88b646d6)
