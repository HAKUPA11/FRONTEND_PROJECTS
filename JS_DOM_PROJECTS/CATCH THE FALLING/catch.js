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


 
// let comet = cometImages[Math.floor(Math.random()*cometImages.length)];;
// document.querySelector("button").addEventListener("click",function(){
//     const img = document.createElement("img");
//     img.src = comet;
//     img.style.width = "40px";
//     img.style.height= "60px";
//     document.getElementById("falling-object").appendChild(img);
// })


// const img = document.createElement("img")
// img.src=cometImages[Math.floor(Math.random()*cometImages.length)];
// img.classList.add('comet');
// img.style.position = 'absolute';
// img.style.left=Math.random()*(window.innerWidth-64)+"px";
// img.style.top = '0px';
// let comet=img;
// document.body.appendChild(comet);


function fall(comet) {
  let top = 0;
  function animate() {
    top += 2; // speed
    comet.style.top = top + 'px';
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

setInterval(create_and_fall, 500);