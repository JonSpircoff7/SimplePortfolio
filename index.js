// document.getElementById("loadingpage").style.overflow = "hidden";

// const pages = document.querySelectorAll(".page");
// const pageFlex = document.querySelectorAll(".pageflex");

// for (const page of pages) {
// page.style.display = "none";
// }

// for (const pagef of pageFlex) {
// pagef.style.display = "none";
// }

// const loading = document.getElementById("loadingpage");
// const main = document.querySelector("main");

// const tl = gsap.timeline();
// tl.fromTo("#loading", { opacity: 0 }, { delay: 1, duration: 2, opacity: 1 })
// .to("#loading", { yPercent: -100, duration: 1, opacity: 0 });
// tl.eventCallback("onComplete", function () {
// loading.style.display = "none";
// for (const page of pages) {
// page.style.display = "block";
// }
// for (const pagef of pageFlex) {
// pagef.style.display = "flex";
// }
// gsap.fromTo(
// ["#main", ".portfolio", ".about", ".contact"],
// { yPercent: 100, opacity: 0 },
// { opacity: 1, duration: 1, yPercent: 0 }
// );
// gsap.fromTo(
// ["nav h1", "nav ul"],
// { opacity: 0, y: 10 },
// { y: 0, delay: 1.5, duration: 2, opacity: 1 }
// );
// gsap.fromTo(
// [".profilepic img", ".call"],
// { opacity: 0, y: 10 },
// { y: 0, duration: 2, opacity: 1 },
// "<.3"
// );
// });

// gsap.to(".portfolio", {
//     scrollTrigger: ".portfolio",
//     opacity: 0,
//     duration: 10,
//     markers: true,
//     });
    
//     gsap.to(".about", {
//     scrollTrigger: ".about",
//     opacity: 0,
//     duration: 10,
//     markers: true,
//     });
    
//     gsap.to(".contact", {
//     scrollTrigger: ".contact",
//     opacity: 0,
//     duration: 10,
//     markers: true,
//     });



// tl.from(loading, {opacity: 0,duration: 3, delay: 1})
// .to(loading, {yPercent: -100, opacity: 0, duration: 1})
// .to(main, {yPercent: -100, duration: 2, opacity: 1}, '-=.6')