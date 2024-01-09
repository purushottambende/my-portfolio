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
const scriptURL = 'https://script.google.com/macros/s/AKfycbwBTipdlnKJSzTsYT0rYPPKPeqavEQ810aazmbAusRhfzOwH2AAoaDsJ_Xc5ikS8wckKg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                        msg.innerHTML = "Message send successfully"
                        setTimeout(function(){
                                msg.innerHTML = ""
                        },5000)
                        form.reset()
                })
                .catch(error => console.error('Error!', error.message))
})
