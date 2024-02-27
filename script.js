let t1 = gsap.timeline({delay: 0});

t1.to(".main", {
    top: 0,
    duration: 2,
    ease: "power4.inOut"
});

t1.to(".div-1 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"

}, "-=2");

t1.to(".div-2 .item", {
    top: 0,
    stagger: -0.25,
    duration: 3,
    ease: "power4.inOut"

}, "-=4");

t1.to(".div-3 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"

}, "-=4");

t1.to(".div-4 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"

}, "-=4");


t1.to(".div-5 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"

}, "-=4");

t1.to(".container",{
    scale: 6,
    duration: 4,
    ease: "power4.inOut"
}, "-=2");

t1.to(".nav-item a, .title p", {
    top: 0,
    stagger: 0.75,
    duration: 1,
    ease: "power3.inOut"
}, "-=1.5");

