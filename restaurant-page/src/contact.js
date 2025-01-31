import "./contact.css";


export function renderContact(homepageContentDiv) {

    const container = document.getElementById(homepageContentDiv);

    container.innerHTML = ``;

    container.innerHTML =`
 <div class="contact-container">
        <h2 id="contact-header">Contact Us</h2>

        <div class="contact-content">
            <h3>📍 Our Location</h3>
            <p>
                <strong>Sakura Sushi - Ginza Branch</strong><br>
                📍 <em>2-4-8 Ginza, Chuo City, Tokyo, Japan</em><br>
                📞 +81 3-1234-5678<br>
                📧 <a href="mailto:info@sakurasushi.jp">info@sakurasushi.jp</a><br>
                🕒 Open: 11:00 AM - 10:00 PM (Daily)
            </p>

            <h3>📩 Send Us a Message</h3>
            <form id="contact-form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
    `;
};