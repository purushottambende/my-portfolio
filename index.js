let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
function opentab(tabName) {
        for (tabLink of tabLinks) {
                tabLink.classList.remove("active-link");
        }
        for (tabContent of tabContents) {
                tabContent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab");
}
let sidemeu = document.getElementById("sideMenu");
function openMenu() {
        sidemeu.style.right = "0";
}
function closeMenu() {
        sidemeu.style.right = "-200px";
}