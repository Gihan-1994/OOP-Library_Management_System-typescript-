// Import necessary modules
import {LibraryCatalogue} from "./LibraryCatalogue";
import {Book} from "./Book";

// Interface to track user borrow history
interface UserBorrows {
    borrowedUser: User[];
    userBorrowedBooks: Book[];
}

export class User {
    // User's name
    private name: string;
    // User's email
    private email: string;
    // Books currently borrowed by the user
    private borrowedBooks: Book[] = [];
    // List of all users
    private static allUsers: User[] = [];
    // History of user borrows
    private static userHistory: UserBorrows = {borrowedUser: [], userBorrowedBooks: []};

    constructor(name: string, email: string) {
        this.name = name; // Initialize user's name
        this.email = email; // Initialize user's email
        User.allUsers.push(this); // Add user to the list of all users
    }

    /**
     * Borrow a book from the library catalogue.
     * @param bookTitle - Title of the book to borrow.
     * @param libraryCatalogue - Instance of the library catalogue to borrow from.
     */
    public borrowBook(bookTitle: string, libraryCatalogue: LibraryCatalogue) {
        const bookToBorrow = libraryCatalogue.getAvailableItems().find((book) => book.getTitle() === bookTitle);
        if (bookToBorrow) {
            // Mark the book as borrowed
            bookToBorrow.markAsBorrowed();
            // Add book to user's borrowed list
            this.borrowedBooks.push(bookToBorrow);
            // Record book in user
            User.userHistory.userBorrowedBooks.push(bookToBorrow);
            // Record user in history
            User.userHistory.borrowedUser.push(this);
            console.log(`${this.name} borrowed ${bookTitle} successfully`);
        } else {
            // Log if book is unavailable
            console.log(`${bookTitle} is not available \n`);
        }
    }

    /**
     * Return a borrowed book.
     * @param bookTitle - Title of the book to return.
     */
    public returnBook(bookTitle: string) {
        const bookToReturnIndex = this.borrowedBooks.findIndex((book) => book.getTitle() === bookTitle);
        if (bookToReturnIndex !== -1) {
            const bookToReturn = this.borrowedBooks[bookToReturnIndex];
            // Remove book from user's borrowed list
            this.borrowedBooks.splice(bookToReturnIndex, 1);
            // Mark the book as returned
            bookToReturn.markAsReturned();
            const userBorrowBookReturnIndex = User.userHistory.userBorrowedBooks.findIndex((book) => book.getTitle() === bookToReturn.getTitle());
            User.userHistory.userBorrowedBooks.splice(userBorrowBookReturnIndex, 1, bookToReturn);
            console.log(`${this.name} returned ${bookTitle} successfully \n`);
        } else {
            // Log if book is not borrowed by the user
            console.log(`${bookTitle} is not borrowed by ${this.name}\n`);
        }
    }

    /**
     * Manage the library by displaying engaged users and their borrow details.
     */
    public manageLibrary() {
        console.log("Library Management System Engaged Users");
        // Display all users
        User.allUsers.forEach((user) => {
            console.log(`${user.name} - ${user.email} `);
        });
        console.log("\n User Borrow details");
        // Display borrow details
        for (let i = 0; i < User.userHistory.userBorrowedBooks.length; i++) {
            const book = User.userHistory.userBorrowedBooks[i];
            const user = User.userHistory.borrowedUser[i];
            console.log(`User Name :${user.name} --borrowed Book : ${book.getTitle()}
            -- Borrowing Status : ${book.getIsBorrowed() ? "Borrowed" : "Returned"}`);
        }
    }
}

