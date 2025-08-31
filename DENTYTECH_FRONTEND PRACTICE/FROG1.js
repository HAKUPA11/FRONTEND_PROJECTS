
gsap.from("#img1",{
    duration:3,
    x:-100,
    opacity:0,
    ease:"power2.out",
    delay:1,
    rotation:360
})
gsap.from("#img2",{
    duration:4,
    x:-100,
    opacity:0,
    ease:"power2.out",
    delay:1.5,
    rotation:360
})
gsap.from("#img3",{
    duration:5,
    x:-100,
    opacity:0,
    ease:"power2.out",
    delay:2,
    rotation:360
})
gsap.from("#img4",{
    duration:6,
    x:-100,
    opacity:0,
    ease:"power2.out",
    delay:2.5,
    rotation:360
})


gsap.from("#nav",{
    y:-50,
    opacity:0,
    duration:2,
    ease:"power2.out",
    delay:1,
    stagger:0.5
})

gsap.to(".pnchline", {
  duration: 3, 
  scrambleText: {
    text: "OUR advantages", 
    chars: "XO", 
    revealDelay: 0.5, 
    speed: 0.4, 
    newClass: "myClass"
  }
});

gsap.to("#btm-left", {
  duration: 3, 
  scrambleText: {
    text: "Your Smile, Our Passion", 
    chars: "ILYXOY", 
    revealDelay: 0.5, 
    speed: 0.4, 
    newClass: "myClass"
  }
});


