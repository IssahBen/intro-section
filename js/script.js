const menu_btn = document.getElementById("menu-btn")
const mobile_menu = document.getElementById("links2")
const links = mobile_menu.querySelectorAll("a")
const main_menu = document.getElementById("links")
const main_links = main_menu.querySelectorAll("a")

links.forEach((link) => link.addEventListener('click', toggleMenu))
main_links.forEach((link) => link.addEventListener('click', toggleMenu))

function toggleMenu(e) {
    link_arrow = e.target.parentElement.parentElement.querySelectorAll('img')[0]
    if (link_arrow.getAttribute("src") == "images/icon-arrow-down.svg") {
        link_arrow.setAttribute('src', 'images/icon-arrow-up.svg')
    } else {
        link_arrow.setAttribute("src", "images/icon-arrow-down.svg")
    }
    menu_id = e.target.getAttribute("data-target")
    console.log(menu_id)
    const menu = document.getElementById(menu_id)
    menu.classList.toggle("hidden")
}



menu_btn.addEventListener('click', togglebtn)

function togglebtn() {
    menu_btn.classList.toggle("open")
    mobile_menu.classList.toggle("hidden")


}