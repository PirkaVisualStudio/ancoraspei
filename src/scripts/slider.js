import Splide from "@splidejs/splide";

var splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 4,
  gap: "80px",
  focus: "center",
  updateOnMove: true,
});

splide.mount();
