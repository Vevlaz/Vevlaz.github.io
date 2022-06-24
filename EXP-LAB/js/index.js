const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu"); /*cuando le de clicl al toggle y selector*/

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible"); /*si está la clase la elimin ay si no está la añade al clickear*/
});