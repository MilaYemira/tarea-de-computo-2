const imagen = document.getElementById("imagen")
const Play_btn = document.getElementById("play")
const audio = document.getElementById("audio")
const Pause_btn = document.getElementById("pause")
const Stop_btn = document.getElementById("stop")
const barra = document.getElementById("barra")

let isplaying = false;

Play_btn.addEventListener('click',()=>{
    audio.play();
    imagen.style.animationPlayState = "running"
})
Pause_btn.addEventListener('click',()=>{
    audio.pause();
    audio.currenTime = 0;
    imagen.style.animationPlayState = "paused"
})
Stop_btn.addEventListener('click',()=>{
    audio.pause();
    audio.currentTime = 0;
    imagen.style.animationPlayState = "paused"
})

window.addEventListener("load",()=>{
    barra.max = audio.duration;
    setInterval(() => {
        barra.value = audio.currentTime;
    
    }, 500)
})
barra.addEventListener("change", ()=>{
    audio.currentTime = barra.value;

})
