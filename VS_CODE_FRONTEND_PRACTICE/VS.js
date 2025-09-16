// PLAY/PAUSE FUNCTIONALITY
const playBtn=document.querySelector("#play");
const Btn=document.querySelector("#play button");
const vdo=document.querySelector(".vdo_bgc video");

playBtn.addEventListener("click", function(){
    if(vdo.paused){
        vdo.play();
        Btn.textContent="Pause";
    }else{
        vdo.pause();
        Btn.textContent="Play";
    }
});

