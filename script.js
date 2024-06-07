



const myLibrary = [];

//book constructor
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}
//function
function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i].title);
        console.log(myLibrary[i].author);
        console.log(myLibrary[i].pages);
    }
}
var book1 = new Book("Harry Potter", "J.K Rowling", 300);
var book2 = new Book("Learning How to Learn", "Barbara Oakley", 175);
addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks();

const library = document.getElementById("library");
var bookcard = document.createElement("div");



library.appendChild

