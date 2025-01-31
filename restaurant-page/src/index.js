import "./styles.css";
import { renderHomepage } from "./homepage";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";
import { renderContact } from "./contact";

console.log("Siema");



document.addEventListener("DOMContentLoaded", () => {
    renderHomepage("content");
});

document.addEventListener("click", (event) => {
    if (event.target.id === "menu-btn") {
        renderMenu("content");
    } else if(event.target.id === "home-btn") {
        renderHomepage("content");
    } else if(event.target.id === "about-btn") {
        renderAbout("content");
    } else if(event.target.id === "contact-btn") {
        renderContact("content");
    };
});