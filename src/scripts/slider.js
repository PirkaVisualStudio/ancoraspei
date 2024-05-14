import Splide from "@splidejs/splide";

var splide = new Splide("#splideTestimonials", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 4,
  gap: "0rem",
  focus: "center",
  updateOnMove: true,
  autoplay: "pause",
  arrows: true,
  breakpoints: {
    1024: {
      perPage: 1,
    },
  },
});
splide.mount();

var splide = new Splide("#splideReviews", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 1,
  gap: "0rem",
  focus: "center",
  updateOnMove: true,
  autoplay: "pause",
  arrows: true,
});

splide.mount();
