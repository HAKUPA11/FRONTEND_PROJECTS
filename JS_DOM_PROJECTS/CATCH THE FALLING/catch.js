const cometImages=[
    "generated-image__5_-removebg-preview.png",
    "generated-image__3_-removebg-preview.png",
    "generated-image__2_-removebg-preview.png", 
    "generated-image__1_-removebg-preview.png", 
];  
 
let comet = cometImages[2];
document.querySelector("button").addEventListener("click",function(){
    const img = document.createElement("img");
    img.src = comet;
    img.style.width = "40px";
    img.style.height= "60px";
    document.getElementById("falling-object").appendChild(img);
})

