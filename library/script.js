  
const bookCardWrapper = document.querySelector(".book-card-wrapper"); 

const myLibrary = [];
const book1 = new Book("Harry Potter", "J.K Rowling", "300", "Yes");
myLibrary.push(book1);

const book1Card = document.createElement("div");
book1Card.classList.add("card");
book1Card.innerHTML = `
<h3>${book1.title}</h3>
<p><span class="bold">Author:</span> ${book1.author}</p>
<p><span class="bold">Pages:</span> ${book1.pages}</p>
<p><span class="bold">Read:</span> ${book1.read}</p>
`;

bookCardWrapper.appendChild(book1Card);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const form = document.querySelector(".form-wrapper");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submit event triggered!");

    const formData = new FormData(form);

        const bookObj = [];
    for (const [key, value] of formData.entries()) {

        bookObj.push(value);
        console.log(`${key}: ${value}`);
    }
    console.log(bookObj);
    const createdBook = new Book(bookObj[0], bookObj[1], bookObj[2], bookObj[3]);
    myLibrary.push(createdBook);
    console.log(myLibrary);

    bookCardWrapper.innerHTML = "";

    for (const book of myLibrary) {
        const Card = document.createElement("div");
        Card.classList.add("card");
        Card.innerHTML = `
        <h3>${book.title}</h3>
        <p><span class="bold">Author:</span> ${book.author}</p>
        <p><span class="bold">Pages:</span> ${book.pages}</p>
        <p><span class="bold">Read:</span> ${book.read}</p>
      `;
        bookCardWrapper.appendChild(Card);
    }

});


