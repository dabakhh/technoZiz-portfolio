const list = document.getElementById("list")
const hamburger  = document.getElementById("hamburger")
const retour = document.getElementById("retour")
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hidden");
    list.classList.toggle("hidden");
    retour.classList.toggle("hidden")
})

retour.addEventListener("click", () => {
    hamburger.classList.toggle("hidden");
    list.classList.toggle("hidden");
    retour.classList.toggle("hidden")
})