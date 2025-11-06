const margin = document.querySelector(".hidden-fade");

const marginOptions = {
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries, marginOptions) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-fade");
    } else {
      entry.target.classList.remove("show-fade");
    }
  });
}, marginOptions);

const hiddenElements = document.querySelectorAll(".hidden-fade");
hiddenElements.forEach((el) => observer.observe(el));
