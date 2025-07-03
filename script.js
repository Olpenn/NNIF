const floorball_button = document.getElementById("floorball-button")
const volleyball_button = document.getElementById("volleyball-button")
const gym_button = document.getElementById("gym-button")
const sport_cards = document.getElementById("sports-cards")


volleyball_button.addEventListener('click', () => {
    volleyball_button.classList.add("selected")
    floorball_button.classList.remove("selected")
    gym_button.classList.remove("selected")
})

floorball_button.addEventListener('click', () => {
    floorball_button.classList.add("selected")
    volleyball_button.classList.remove("selected")
    gym_button.classList.remove("selected")
})

gym_button.addEventListener('click', () => {
    gym_button.classList.add("selected")
    floorball_button.classList.remove("selected")
    volleyball_button.classList.remove("selected")
})

