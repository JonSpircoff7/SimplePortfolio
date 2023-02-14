// variables
let tl = gsap.timeline();;
let welcomeMsg = document.querySelectorAll(".welcome");

// particles
let particleClass = "particle";
let particleColors = ["white", "grey"];
let bkgcontainer = document.getElementById("bkgcontainer");
let count = 200;
let w = bkgcontainer.offsetWidth;
let h = bkgcontainer.offsetHeight;
let elem;

// Welcome "loading" message animation
// Welcome "loading" message animation
for( let i = 0 ; i < 3 ; i++){
  welcomeMsg.forEach(element => {
  tl.to(element, {y: 5, ease: "circ", repeat: 1,duration: .1, yoyo: true}, "-=.1")
  })}
  
  // Remove welcome message 
  welcomeMsg.forEach(element => {
  tl.to(element, {x: 400, ease: "power4.in", duration: 1, opacity: 0}, "<.15")
 
  });  

// Home page animation
tl.to(".home", {xPercent: 100, duration: 1}, "<")

// Home page text animation
tl.fromTo([".header", ".navlinks"], {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 3})
.fromTo(["#projects"], {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 3}, "<.2")
.fromTo([".footer"], {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 3}, "<.2")
.fromTo(["#profilepic"], {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 3}, "<.2")

// particles
for(let i= 0; i< count; i++){
    elem = document.createElement('div');
    elem.className = particleClass;
    bkgcontainer.appendChild(elem);
    gsap.set(elem, {
        x : gsap.utils.random(0 , w),
        y : gsap.utils.random(0, h) - (h * 1),
        z : gsap.utils.random(1, 500),
        duration: gsap.utils.random(1),
        scale: gsap.utils.random(0.01, 1),
        opacity: gsap.utils.random(0.01, .75),
        backgroundColor: gsap.utils.random(particleColors)
        
    });
    anime(elem)
}

function anime(elem){
    gsap.to(elem, gsap.utils.random( 5, 10), {
        scale: gsap.utils.random(0,2),
        z: gsap.utils.random(-1000, 1000),
        y: gsap.utils.random(-1000, h),
        x: gsap.utils.random(-1000, w),
        ease: "linear",
        repeat: -1
    })
   
}



const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollBKG = gsap.to("#bkgcontainer", {
    yPercent: 0 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#bkgcontainer",
      pin: true,
      scrub: 1,
      end: "+=3000",
      //snap: 1 / (sections.length)
    }
  });
  let scrollHome = gsap.to(".home", {
    yPercent: 0 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".home",
      pin: true,
      scrub: 1,
      end: "+=3000",
      //snap: 1 / (sections.length)
    }
  });
  let scrollTween = gsap.fromTo(sections, {
    xPercent: 0, // <-- updated
    ease: "none",
    start: "+=0"
  }, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "sections",
      pin: true,
      scrub: 1,
      end: "+=3100",
      markers: true
    }
  });

console.log(1 / (sections.length))

//Progress bar animation

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: "section",
    start: "top left",
    end: "+=700%",
    markers: true,
    scrub: 1
  }
});

// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  
  // do a little stagger
  gsap.from(text, {
    y: 10,
    opacity: 0,
    duration: 5,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center"
    }
  });
});
