
import {Book} from "./Book.ts";

//Create the Library Catalogue class
export class LibraryCatalogue{
    //Create a private property to store the library items
    private libraryItems: Book[] = [];

    //Create a method to add an item to the library
    public addItem(book: Book){
        //Check if the book already exists
        const bookExists = this.libraryItems.some((item) => item.getId() === book.getId());
        //If the book already exists, return
        if(bookExists){
            console.log(`${book.getTitle()} already exists in the library \n`);
            return
            //If the book doesn't exist, add it to the library
        }else {
            this.libraryItems.push(book);
            console.log(`${book.getTitle()} added to the library \n`);
        }

    }
    //Create a method to display all the items in the library
    public displayAllItems(){
        console.log("Library Catalogue All Available Items");
        //Loop through the library items and display each one
        this.libraryItems.forEach((book) =>{
            book.display();
            console.log(`...........\n`);
        } );
    }
    //Create a method to display all the available items in the library
    public displayAvailableItems(){
        console.log("Library Catalogue Currently Available Items");
        //Loop through the library items and display each one
        this.getAvailableItems().forEach((book) => {
            book.display();
            console.log("..........")
        });
    }
    public displayBorrowedItems(){
        console.log("Library Catalogue Currently Borrowed Items");
        //Loop through the library items and display each one
        this.getBorrowedItems().forEach((book) => {
            book.display();
            console.log("..........")
        });
    }
    //Create a method to display all the borrowed items in the library
    public getAvailableItems(): Book[]{
        return this.libraryItems.filter((book) => !book.getIsBorrowed());
    }
    //Create a method to display all the borrowed items in the library
    public getBorrowedItems(): Book[]{
        return this.libraryItems.filter((book) => book.getIsBorrowed());
    }
    //Create a method to find a specific item in the library using Title
    public findAvailableItemByTitle(title: string): (void){
        const isAvailable = this.getAvailableItems().find((book) => book.getTitle() === title);
        if (isAvailable) {
            return console.log(`${title} is available \n`);
        }else {
            return console.log(`${title} is not available \n`);
        }
    }

}

