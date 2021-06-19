const burgerMenu = document.querySelector(".header__burger");
if (burgerMenu) {
    const headerMenu = document.querySelector(".header__menu");
    burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_active");
        headerMenu.classList.toggle("_active");
    });
}