gsap.registerPlugin(ScrollTrigger);

gsap.to(".first-name", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  opacity: 0,
  y: -100,
});

gsap.to(".last-name", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  opacity: 0,
  y: 100,
});

gsap.from(".id-card", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".id-card",
    start: "top 80%",
  },
});
