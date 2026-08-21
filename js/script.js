// =========================
// CURRENT YEAR
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const formMessage = document.getElementById("formMessage");
    const params = new URLSearchParams(window.location.search);

    if (formMessage && params.get("success") === "1") {
        formMessage.innerHTML = `
            <div class="alert alert-success">
                Thank you! Your message has been sent successfully.
            </div>
        `;
    }

});


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