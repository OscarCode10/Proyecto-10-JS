const navegation = document.querySelector(".mainMenu")
const openM = document.querySelector(".openMenu")
const closeM = document.querySelector(".closeMenu")

openM.addEventListener("click", () => {
    navegation.classList.add("visibility")
})

closeM.addEventListener("click", () => {
    navegation.classList.remove("visibility")
})