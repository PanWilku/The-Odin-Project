import "./menu.css";
import nigiri1 from "./assets/nigiri-1.jpg"
import sashimi2 from "./assets/sashimi-2.jpg"
import maki3 from "./assets/maki-3.jpg"
import dragon4 from "./assets/dragon-4.jpg"
import spicytuna5 from "./assets/spicytuna-5.jpg"
import party6 from "./assets/party-6.jpg"


export function renderMenu(homepageContentDiv) {

    const container = document.getElementById(homepageContentDiv);

    container.innerHTML = ``;

    container.innerHTML =`
<div class="menu-container">
        <h2 id="menu-header">Our Sushi Menu</h2>

        <div class="menu-items">

            <div class="menu-item">
                <img src="${nigiri1}" alt="Nigiri Sushi">
                <div class="menu-info">
                    <h3>Nigiri Sushi x8</h3>
                    <p>Freshly sliced fish delicately placed on hand-formed sushi rice. Choose from salmon, tuna, shrimp, or eel.</p>
                    <span class="price">¥1700</span>
                </div>
            </div>

            <div class="menu-item">
                <img src="${sashimi2}" alt="Sashimi Platter x24">
                <div class="menu-info">
                    <h3>Sashimi Platter</h3>
                    <p>A selection of the finest raw fish, including salmon, tuna, yellowtail, and octopus, served with fresh wasabi.</p>
                    <span class="price">¥7800</span>
                </div>
            </div>

            <div class="menu-item">
                <img src="${maki3}" alt="Maki Rolls">
                <div class="menu-info">
                    <h3>Maki Rolls x12</h3>
                    <p>Traditional sushi rolls filled with fresh ingredients such as cucumber, avocado, and crab, wrapped in seaweed and rice.</p>
                    <span class="price">¥1500</span>
                </div>
            </div>

            <div class="menu-item">
                <img src="${dragon4}" alt="Dragon Roll">
                <div class="menu-info">
                    <h3>Dragon Roll x6</h3>
                    <p>A specialty roll featuring shrimp tempura, avocado, cucumber, and a topping of fresh eel and avocado.</p>
                    <span class="price">¥2300</span>
                </div>
            </div>

            <div class="menu-item">
                <img src="${spicytuna5}" alt="Spicy Tuna Roll">
                <div class="menu-info">
                    <h3>Spicy Tuna Roll x6</h3>
                    <p>A bold combination of spicy tuna, cucumber, and sesame seeds, topped with a drizzle of spicy mayo.</p>
                    <span class="price">¥2100</span>
                </div>
            </div>

            <div class="menu-item">
                <img src="${party6}" alt="Party Sushi Set">
                <div class="menu-info">
                    <h3>Party Sushi Set x96</h3>
                    <p>A large assortment of premium sushi, including an exquisite selection of nigiri, maki, sashimi, and specialty rolls. Ideal for sharing with friends, family, or celebrating special moments.</p>
                    <span class="price">¥18800</span>
                </div>
            </div>

        </div>
    </div>
    `;
};