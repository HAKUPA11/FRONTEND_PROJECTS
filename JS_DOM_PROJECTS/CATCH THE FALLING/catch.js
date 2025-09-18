const cometImages=[
    "comet1.png",
    "comet2.png",
    "comet3.png", 
    "comet4.png", 
    "comet5.png", 
    "comet6.png", 
    "comet7.png", 
    "comet8.png", 
    "comet9.png" 
];  

let score=0;

function fall(comet) {
  let top = 0;

  function animate() {
    top += 2; // speed
    comet.style.top = top + 'px';

    if(checkCollision(comet, box)) {
      comet.remove();
      score += 1;
      document.getElementById("num").textContent =score;
      return; // Stop animation, comet is caught
    }

    if (top < window.innerHeight) {
      requestAnimationFrame(animate);
    } else {
      comet.remove();
    }
  }
  animate();
}


function create_and_fall(){
    const comet=document.createElement("img");
    comet.src= cometImages[Math.floor(Math.random()*cometImages.length)];
    comet.classList.add("comet");
    comet.style.position="absolute";
    comet.style.left= Math.random() * (window.innerWidth-24)+"px";
    comet.style.right= Math.random() * (window.innerWidth-24)+"px";
    comet.style.top= "0px" ;

    document.body.appendChild(comet);
    fall(comet);
}

setInterval(create_and_fall, 1000);

// making thr box controls

const box=document.querySelector("img");
box.style.position="relative";
box.style.left = (window.innerWidth / 2 - box.offsetWidth / 2) + "px";// to make the box initially centered
document.addEventListener("keydown", function(e){
  const step=100;
  let left=box.offsetLeft;

  if (e.key==="ArrowLeft"){
    left=Math.min(window.innerWidth-box.offsetWidth, left-step);
  }else if(e.key==="ArrowRight"){
    left=Math.min(window.innerWidth-box.offsetWidth, left+step);
  }

  box.style.left=left+"px";

})

//making the collision logic 
function checkCollision(comet,box) {
    const cometRect = comet.getBoundingClientRect();
    const playerRect = box.getBoundingClientRect();
    return !(
        cometRect.bottom < playerRect.top ||
        cometRect.top > playerRect.bottom ||
        cometRect.right < playerRect.left ||
        cometRect.left > playerRect.right
    );
}