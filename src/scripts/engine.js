const pianoKeys = document.querySelectorAll(".piano-keys  .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCkeck = document.querySelector(".keys-check input")
mapedKeys = []

let audio = new Audio("src/tunes/a.wav")

const playtune = (key) =>{
    audio.src = `src/tunes/${key}.wav`
audio.play()
const clickedKey  = document.querySelector(`[data-key="${key}"]`)
clickedKey.classList.add("active")
setTimeout(()=>{
    clickedKey.classList.remove("active")
},150)
}
pianoKeys.forEach((key) => {
    key.addEventListener("click", ()=> playtune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
})
document.addEventListener("keydown",(e) =>{
    if(mapedKeys.includes(e.key)){
        playtune(e.key)
    }
})
const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"))
}
const handleValume = (e) =>{
 audio.volume = e.target.value
}
volumeSlider.addEventListener("input",handleValume)
keysCkeck.addEventListener("click", showHideKeys)