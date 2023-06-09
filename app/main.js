let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move');
};
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove('move');
}

// Email Js

function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    /* let tel = document.querySelector(".tel"); */
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });
}

validate();

function sendmail (name, email, msg) {
    emailjs.send("service_nttv9u7","template_fbnymok",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "Error!",
        text: "All fields required!",
        icon: "error",
      });
}

function success() {
    swal({
        title: "Email sent successfully!",
        text: "Get back to you as soon as possible!",
        icon: "success",
      });
}

// Header Background Change On Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});
