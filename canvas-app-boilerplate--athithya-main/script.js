/* Iteration 4: Make Everything Work */

const face = document.getElementById("face-plate")
const btn_face = document.getElementById("btn-face-color")
btn_face.addEventListener("input",()=>{
    face.style.fill = btn_face.value
})

const helmet = document.getElementById("helmet")
const btn_helmet = document.getElementById("btn-helmet")
btn_helmet.addEventListener("input",()=>{
    helmet.style.fill = btn_helmet.value
})

const eyes = document.getElementById("eyes")
const btn_eyes = document.getElementById("btn-eyes")
btn_eyes.addEventListener("input",()=>{
    eyes.style.fill = btn_eyes.value
})