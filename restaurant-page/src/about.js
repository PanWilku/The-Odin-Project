import "./about.css";


export function renderAbout(homepageContentDiv) {

    const container = document.getElementById(homepageContentDiv);

    container.innerHTML = ``;

    container.innerHTML =`
<div class="about-container">
    <h2 id="about-header">About Us</h2>

    <div class="about-content">
        <p>
            Welcome to <strong>Sakura Sushi</strong>, where tradition meets innovation in the heart of Japanese cuisine. 
            We take pride in offering an <strong>authentic sushi experience</strong>, crafted with the freshest ingredients 
            and prepared by master chefs dedicated to perfection.
        </p>

        <h3>📍 Our Location</h3>
        <p>
            <strong>Sakura Sushi - Ginza Branch</strong><br>
            📍 <em>2-4-8 Ginza, Chuo City, Tokyo, Japan</em><br>
            📞 +81 3-1234-5678<br>
            🕒 Open: 11:00 AM - 10:00 PM (Daily)
        </p>

        <h3>📜 Our History</h3>
        <p>
            Founded in <strong>1987</strong> by <em>Master Chef Takashi Yamamoto</em>, Sakura Sushi was born out of a passion 
            for preserving centuries-old sushi traditions while embracing modern culinary techniques. From a small 
            family-owned sushi bar, we have evolved into a <strong>renowned destination</strong> for sushi lovers worldwide.
        </p>

        <h3>🥢 Our Philosophy</h3>
        <p>
            At Sakura Sushi, we believe that sushi is not just food—it’s an <strong>art form</strong>. From the careful selection of 
            fish to the perfectly seasoned rice, every detail matters. We aim to bring people together through the beauty of 
            Japanese cuisine, creating <strong>moments of joy, warmth, and connection</strong>.
        </p>

        <h3>🚀 Visit Us Today!</h3>
        <p>
            Experience the magic of <strong>Sakura Sushi</strong> and indulge in the finest sushi Tokyo has to offer. Whether you're a 
            first-time guest or a long-time patron, we welcome you to enjoy an unforgettable journey through the art of sushi.
        </p>
    </div>
</div>
    `;
};