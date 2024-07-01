import Splide from "@splidejs/splide";

var splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 4,
  gap: "0.5rem",
  focus: "center",
  updateOnMove: true,
  breakpoints: {
    1024: {
      perPage: 3,
      gap: "0.5rem",
    },
    768: {
      perPage: 1,
      gap: "0.5rem",
    },
  },
});

splide.mount();
