import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
    wrapper: window,
    content: document.documentElement,
    lerp: 0.1,
    duration: 1.2,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 3,
    touchMultiplier: 2,
    normalizeWheel: false,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  },
});

/* Nav color */
window.addEventListener("scrollNavColor", (e) => {
  const { target, way } = e.detail;

  if (way === "enter") {
    target.style.backgroundColor = "";
  } else {
    target.style.backgroundColor = "rgba(255,255,255,0.7)";
  }
});

/* nav height */
window.addEventListener("scrollNavHeight", (e) => {
  const { target, way } = e.detail;

  if (way === "enter") {
    target.style.height = "";
  } else {
    target.style.height = "4rem";
  }
});
