import "./styles.css";
import { renderHomepage } from "./homepage";
import { renderMenu } from "./menu";

console.log("Siema");



document.addEventListener("DOMContentLoaded", () => {
    renderHomepage("content");
});

document.addEventListener("click", (event) => {
    if (event.target.id === "menu-btn") {
        renderMenu("content");
    } else if(event.target.id === "home-btn") {
        renderHomepage("content");
    }
});