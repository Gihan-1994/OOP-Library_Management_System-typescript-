//Create Book class
export class Book {
    //properties
    private title: string;
    private id: number;
    private author: string;
    private isbn: string;
    private isBorrowed: boolean = false;

        //constructor
    constructor(title: string, id: number, author: string, isbn: string) {
        //initialize properties
        this.title = title;
        this.id = id;
        this.author = author;
        this.isbn = isbn;

    }
 //Display method to print book details
    public display() {
        console.log(
            `Title: ${this.title}              
            ID: ${this.id} 
            Author: ${this.author} 
            ISBN: ${this.isbn}  
            status: ${this.isBorrowed ? "Borrowed" : "Available"}`);
    }
   //get book title
    public getTitle() {
        return this.title;
    }
    //get book id
    public getId() {
        return this.id;
    }
    //check if book is borrowed
    public getIsBorrowed() {
        return this.isBorrowed;
    }

    //mark book as borrowed
    public markAsBorrowed() {
        this.isBorrowed = true;
    }

    //mark book as returned
    public markAsReturned() {
        this.isBorrowed = false;
    }
}