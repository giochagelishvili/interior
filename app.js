// load dom content first
document.addEventListener('DOMContentLoaded', function() {
    // assign buttons to variables
    const open = document.getElementById("hamburger");
    const close = document.getElementById("close-menu");
    const readMore = document.getElementById("read-more");

    // nav-menu button assignments
    const collectionButton = document.getElementById("collection");
    const aboutButton = document.getElementById("about");
    const contactButton = document.getElementById("contact");

    // open and close nav-menu
    open.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);

    // alert user when they click the button
    readMore.addEventListener("click", btnAlert);
    collectionButton.addEventListener("click", btnAlert);
    aboutButton.addEventListener("click", btnAlert);
    contactButton.addEventListener("click", btnAlert);

    // outputs alert message to user
    function btnAlert() {
        alert("This would take you to another page");
    }

    // opens nav menu
    function openMenu() {
        document.querySelector("nav").style.top = "0";
        document.querySelector("body").style.overflow = "hidden";
    }

    // closes nav menu
    function closeMenu() {
        document.querySelector("nav").style.top = "-100vh";
        document.querySelector("body").style.overflow = "visible";
    }
});