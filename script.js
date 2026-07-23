// ================= DARK MODE =================

const theme = document.getElementById("theme");

if (theme) {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-sun");
    }

    theme.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            theme.classList.remove("fa-moon");
            theme.classList.add("fa-sun");

        } else {

            localStorage.setItem("theme", "light");

            theme.classList.remove("fa-sun");
            theme.classList.add("fa-moon");

        }

    });

}


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

AOS.init({
    duration: 1000,
    once: true
});

// ================= EMAIL JS =================


(function(){


emailjs.init("xv73xxyjD7R_5j5nI");


})();


window.onload = function(){



document.getElementById("contact-form")
.addEventListener("submit", function(event){

event.preventDefault();


emailjs.sendForm(
"service_p1xnevy",
"template_dhzwoyv",
this
)
.then(() => {

alert("Message Sent Successfully!");

}, (error) => {

alert("Error sending message");
console.log(error);

});



});

}