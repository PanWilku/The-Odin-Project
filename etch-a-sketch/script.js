sizeInput = document.querySelector("#size");
sizeButton = document.querySelector("#size-button");
container = document.querySelector(".container");
resetButton = document.querySelector("#reset-button");


sizeInput.addEventListener("input", () => {
    if (parseInt(sizeInput.value) > 100) {
        sizeInput.value = 100;
    }
})

sizeButton.addEventListener("click", () => handleClick(sizeInput.value, container))

resetButton.addEventListener("click", handleReset)


function handleClick (value, container) {
    container.innerHTML = '';
    console.log(value);
    squaresSize = 1000/value;

    for (let i = 0; i < value * value; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = squaresSize + "px";
        div.style.height = squaresSize + "px";
        div.style.opacity = "1";
        div.addEventListener("mouseover", () => {
            div.style.background = `rgb(${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            div.style.opacity -= 0.1;
        });
        container.appendChild(div);
      }
}

function handleReset() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square) => {
        square.style.background = "white";
        square.style.opacity = 1;
    });
}


handleClick(16, container);