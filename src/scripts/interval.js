const margin2 = document.querySelector(".hidden-interval");

const marginOptions2 = {
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries, marginOptions2) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("start-interval");
    } else {
      entry.target.classList.remove("start-interval");
    }
  });
}, marginOptions2);

const hiddenElements = document.querySelectorAll(".hidden-interval");
hiddenElements.forEach((el) => observer.observe(el));
