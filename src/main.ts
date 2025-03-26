import { User } from "./modules/User";
import { LibraryCatalogue } from "./modules/LibraryCatalogue";
import { Book } from "./modules/Book";

const Book1 = new Book("The Great Gatsby", 1, "F. Scott Fitzgerald", "978-3-16-148410-0");
const Book2 = new Book("To Kill a Mockingbird", 2, "Harper Lee", "978-0-06-112004-3");
const Book3 = new Book("1984", 3, "George Orwell", "978-0-06-112004-3");
const Book4 = new Book("Pride and Prejudice", 4, "Jane Austen", "978-0-06-112004-3");
const Book5 = new Book("The Catcher in the Rye", 5, "J.D. Salinger", "978-0-06-112004-3");

const libraryCatalogue = new LibraryCatalogue();
libraryCatalogue.addItem(Book1);
libraryCatalogue.addItem(Book2);
libraryCatalogue.addItem(Book3);
libraryCatalogue.addItem(Book4);
libraryCatalogue.addItem(Book5);

const user1 = new User("John Doe", "d0G0y@example.com");
const user2 = new User("Gihan", "ngg@example.com");
user2.borrowBook("The Great Gatsby", libraryCatalogue);
user2.borrowBook("1984", libraryCatalogue);
user2.returnBook("1984");
user1.borrowBook("The Great Gatsby", libraryCatalogue);
user1.borrowBook("To Kill a Mockingbird", libraryCatalogue);
user1.returnBook("The Great Gatsby");
user1.manageLibrary();
libraryCatalogue.displayAllItems();
libraryCatalogue.displayAvailableItems();
libraryCatalogue.displayBorrowedItems();
libraryCatalogue.findAvailableItemByTitle("1984")







