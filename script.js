


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
        
        var bookcard = document.createElement("div");
        var bookinfo = document.createElement("p");
        bookinfo.innerHTML = "<span>Title: </span>" + myLibrary[i].title + "\n" + "<span>Author: </span>" + myLibrary[i].author + "\n" + "<span>Pages: </span>" + myLibrary[i].pages;
        //append paragraph to card
        bookcard.appendChild(bookinfo);
        //add the card to the bookcard box
        bookcard.classList.add("bookcard");
        //append the card to the library div
        library.appendChild(bookcard);
    }
}


function resetLibrary(){

    var cards = document.getElementsByClassName("bookcard");
    for(let i = 0; i < cards.length; i++){
        cards[i].remove();
    }

}


const library = document.getElementById("library");
let bookform = document.getElementById("bookdata");
let button = document.getElementById("submit");

bookform.addEventListener("submit", function(e){
    console.log("event fired");
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("title"));
    var newBook = new Book(data.get("title"), data.get("author"), data.get("pages"));
    addBookToLibrary(newBook);
    resetLibrary();
    displayBooks();

    

    $("#bookform").modal('hide');
   
});




var book1 = new Book("Harry Potter", "J.K Rowling", 300);
var book2 = new Book("Learning How to Learn", "Barbara Oakley", 175);



addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks();



