import Splide from "@splidejs/splide";

var splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 1,
  gap: "0.5rem",
  focus: "center",
  updateOnMove: true,
});

splide.mount();
