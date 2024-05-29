//Array to store books
const myLibrary = [];

//Create new book object with details
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.numpages = pages;
    this.read = read;
    this.info = function() {
        return (title + " by " + author + ', ' + numpages + ' pages, ' + read)
    }
}

//Add book object to library array

function addBook(book) {
    myLibrary.push(book);
    displayBook(book);
}

//Loop through books to add rows
function initializeBooks (library) {
    for (let i = 0; i < library.length; i++) {
       displayBook(library[i]);
    }
}

function displayBook(bookObject) {
    let table = document.getElementById('books');
    let row = table.insertRow(-1);
    let rowID = 'book' + (document.querySelectorAll('tr').length - 1);
    row.setAttribute("id", rowID )
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = bookObject.title;
    cell2.innerHTML = bookObject.author;
    cell3.innerHTML = bookObject.numpages;
    cell4.innerHTML = bookObject.read;
    let buttonRow = document.querySelector('#' + rowID);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    buttonRow.appendChild(deleteButton);
}
