let searchIcons = document.querySelector(".searchIcon");
let searchBaarpage = document.querySelector(".searchBaarPage");
let AcconutIcon = document.querySelector(".AcconutIcon");
let Login = document.querySelector(".login-Page");
let header = document.querySelector(".header_section")


searchIcons.addEventListener("click" , (e) => {
    searchBaarpage.style.display = "block";
    document.body.classList.add("hidden");
})

let crossBtn = document.querySelector(".cancel-Button")
crossBtn.addEventListener("click" , (e) => {
    searchBaarpage.style.display = "none"
})

const CartBtn = document.getElementById('setting');
const sidePanel = document.getElementById('sidePanel');

CartBtn.addEventListener('click', () => {
     sidePanel.classList.toggle('open');
       document.body.classList.add("hidden");
});

function Cross() {
     sidePanel.classList.remove('open');
}


const hem = document.getElementById("hem-burger");
const side = document.getElementById("responsive-content");

hem.addEventListener("click", () => {
     side.style.left = "0"
});

function closepage() {
     side.style.left = "-452px"

}




