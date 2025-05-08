const graphics = [
  { img: "flyersXEgreen.png", title: "NYU XE Symposium" },
  { img: "flyer.png", title: "Brooklyn DJ Set Flyer" },
  { img: "XEprogram.png", title: "NYU XE Program" },
  { img: "estudiotorta-5.png", title: "estudiotorta Flyer" },
  { img: "estudiotorta.img.png", title: "estudiotorta Insta" },
];

let shuffledGraphics = [];
let currentIndex = 0;

function shuffleGraphics() {
  shuffledGraphics = [...graphics].sort(() => 0.5 - Math.random());
  currentIndex = 0;
}

function displayRandomGraphic() {
  if (currentIndex === 0 || currentIndex >= shuffledGraphics.length) {
    shuffleGraphics();
  }

  const graphic = shuffledGraphics[currentIndex];
  currentIndex++;

  const container = document.getElementById("random-graphic");
  container.innerHTML = `
      <img src="${graphic.img}" alt="${graphic.title}" style="max-width: 400px; border-radius: 8px;" />
      <h3 style="margin-top: 15px;">${graphic.title}</h3>
    `;

  gsap.from("#random-graphic img", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
  });
}

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".gs-reveal").forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".gs-reveal").forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});

window.addEventListener("load", () => {
  const items = document.querySelectorAll(".scatter-item");

  items.forEach((item) => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);
    const rotate = (Math.random() - 0.5) * 40;

    gsap.set(item, {
      x: x,
      y: y,
      rotation: rotate,
      opacity: 0,
    });

    gsap.to(item, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay: Math.random() * 0.5,
    });
  });
});
