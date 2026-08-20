// =========================
// CURRENT YEAR
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        const formMessage =
            document.getElementById("formMessage");

        formMessage.innerHTML = `
            <div class="alert alert-success">
                Thank you, ${name}! Your message has been received.
            </div>
        `;

        contactForm.reset();

    });

}


// =========================
// NAVBAR SHADOW
// =========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.4)";
    } else {
        navbar.style.boxShadow = "none";
    }

});