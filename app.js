//This is a contructor class that allows you to create instances of 
//every book, in this case of the book Data provided.
class Book {
    constructor(author, language, subject, title){
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    }
}

class UI {
    static displayBooks() {        
        const books = bookData;
        //just gives the bookData an easier to remember variable called book
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector("#book-list");
        //this gets the booklist(or "Bookshelf" ID from the index HTML)
        //so you can add books to it
        const row = document.createElement("tr");
        //creates a new row for the new book with all the information
        row.innerHTML = `
            <td>${book.author}</td>
            <td>${book.language}</td>
            <td>${book.subject}</td>
            <td>${book.title}</td>
            <td><a href="#" class="btn btn-danger btn-sm
            delete">X</a></td>
        `;
        //adds the new book to the page
        list.appendChild(row);
    }
    //deletes the book from the page  "supposedly", still can't 
    //get this to work
    static deleteBook(el) {
        if(el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }


//Shows an alert if you mess up and forget to fill in the input fields
    static showAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
        setTimeout(() => document.querySelector(".alert").remove(), 2000);
    }

    static clearFields(){
        document.querySelector("#author").value = "";
        document.querySelector("#language").value = "";
        document.querySelector("#subject").value = "";
        document.querySelector("#title").value = "";    }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);


//This adds a book when you submit it
document.querySelector("#book-form").addEventListener("submit", (e) => {

    e.preventDefault();
    
    const author = document.querySelector("#author").value;
    const language = document.querySelector("#language").value;
    const subject = document.querySelector("#subject").value;
    const title = document.querySelector("#title").value;
    //So that the input fields are not empty this code gives an alert
    if(author === "" || language === "" || subject === "" || title === "") {
        UI.showAlert("Please fill in all the fields", "danger");
    } else {
        const book = new Book(author, language, subject, title);

        UI.addBookToList(book);

        UI.clearFields();
    }


    const book = new Book(author, language, subject, title);

    UI.addBookToList(Book);

    UI.clearFields();
}); 

document.querySelector("#book-list").addEventListener("click", (e) => { 
    UI.deleteBook(e.target)
});