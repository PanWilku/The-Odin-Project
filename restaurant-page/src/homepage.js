import "./homepage.css";
import sushi1 from "./assets/sushi-1.jpg";
import sushi2 from "./assets/sushi-2.jpg";


export function renderHomepage(homepageContentDiv) {

    const container = document.getElementById(homepageContentDiv);

    container.innerHTML = ``;

    container.innerHTML =`
    <div class="container">
        <h2 id="header">Welcome to Sakura Sushi</h2>
            <div class="p-container">
                <p>
                    Experience the finest sushi crafted by master chefs using the freshest ingredients.
                    At Sakura Sushi, we honor the **art of traditional Japanese sushi-making**,
                    combining **delicate flavors**, **perfectly seasoned rice**, and the highest quality seafood.
                </p>
            </div>
                <button id="menu-btn">See our Menu</button>
            <div class="p-container">
                <p>
                    Enjoy a warm and inviting ambiance, where every detail is designed to immerse you in
                    **true Japanese hospitality**. Whether you're a sushi connoisseur or new to the world of sushi,
                    our menu offers a perfect selection for everyone.
                </p>
            </div>
            <div class="img-container">
               <img src="${sushi1}" alt='Image by <a href="https://pixabay.com/users/mekan_4-30596012/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8113165">mekan abdyllayew</a> from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8113165">Pixabay</a>'>
               <img src="${sushi2}" alt=Image by <a href='https://pixabay.com/users/drawsandcooks-6719143/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2853382">Kevin Petit</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2853382">Pixabay</a>'>
            </div>
    </div>
    `;
};

