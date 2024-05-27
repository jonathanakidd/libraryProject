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
}

//Loop through books to add rows
function displayBooks (library) {
    for (let i = 0; i < library.length; i++) {
        console.log(library)
        console.log(Object.values(i));
        let table = document.getElementById('books');
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = library[i].title;
        cell2.innerHTML = library[i].author;
        cell3.innerHTML = library[i].numpages;
        cell4.innerHTML = library[i].read;
    }
}

