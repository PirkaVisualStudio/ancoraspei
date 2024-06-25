import Splide from "@splidejs/splide";

var splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 4,
  gap: "1.5rem",
  focus: "center",
  updateOnMove: true,
  breakpoints: {
    1024: {
      perPage: 3,
      gap: "1rem",
    },
    768: {
      perPage: 1,
      gap: "1rem",
    },
  },
});

splide.mount();
