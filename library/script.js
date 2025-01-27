const bookCardWrapper = document.querySelector(".book-card-wrapper"); 

const myLibrary = [];
const book1 = new Book("Harry Potter", "J.K Rowling", "300", "Yes");
myLibrary.push(book1);

function createCard(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><span class="bold">Author:</span> ${book.author}</p>
        <p><span class="bold">Pages:</span> ${book.pages}</p>
        <p><span class="bold">Read:</span> <span class="read-status">${book.read}</span></p>
        <button class="book-read-b">Change Read Status</button>
        <button class="book-remove">Remove</button>
    `;
    bookCardWrapper.appendChild(bookCard);

    const changeStatusButton = bookCard.querySelector(".book-read-b");
    changeStatusButton.addEventListener("click", () => {

        book.read = book.read === "Yes" ? "No" : "Yes";
        bookCard.querySelector(".read-status").textContent = book.read;
    });

    const removeButton = bookCard.querySelector(".book-remove");
    removeButton.addEventListener("click", () => {

        bookCard.remove();
        myLibrary.pop();
    });
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

createCard(book1);

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
    myLibrary.forEach(createCard);
});
