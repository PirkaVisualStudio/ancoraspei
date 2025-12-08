import Splide from "@splidejs/splide";

var splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 4,
  breakpoints: {
    1800: {
      perPage: 2,
    },
    900: {
      perPage: 1,
    },
  },
  gap: "80px",
  focus: "center",
  updateOnMove: true,
});

splide.mount();
