//let galleryImages = document.querySelectorAll(".gallery2-img");
let galleryImages = document.querySelectorAll(".img");
const imgNumber = galleryImages.length;
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function (image, index, event) {
    image.onclick = function () {
      let imgArray = Array.from(galleryImages);
      let imgIndex = imgArray.indexOf(this);
      let imgValue = imgArray[imgIndex];
      let imgUrl = imgValue.getAttribute("src");
      //let imgSrc = imgElement[0].src;
      //let getFullImgUrl = imgSrc;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", imgUrl);
      newImg.setAttribute("id", "current-img");

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 + 10;

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("\u2190");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        //newPrevBtn.setAttribute("onclick", "changeImg(0))");
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px";

        newPrevBtn.onclick = function () {
          let newIndex = imgIndex - 1;
          if (newIndex < 0) {
            newIndex = imgNumber - 1;
          } else {
            newIndex = imgIndex - 1;
          }

          document.querySelector("#current-img").remove();
          let getImgWindow = document.querySelector(".img-window");
          let newImg = document.createElement("img");
          getImgWindow.appendChild(newImg);

          let imgValue = imgArray[newIndex];
          let imgUrl = imgValue.getAttribute("src");

          let newUrl = imgUrl;

          newImg.setAttribute("id", "current-img");

          newImg.setAttribute("src", newUrl);

          imgIndex = newIndex;

          newImg.onload = function () {
            let imgWidth = this.width;
            let calcImgToEdge = (windowWidth - imgWidth) / 2 + 10;

            let nextBtn = document.querySelector(".img-btn-next");
            nextBtn.style.cssText = "right: " + calcImgToEdge + "px";
            let prevBtn = document.querySelector(".img-btn-prev");
            prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
          };
        };

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("\u2192");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        //newNextBtn.setAttribute("onclick", "changeImg(1))");
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px";

        newNextBtn.onclick = function () {
          let newIndex = imgIndex + 1;
          if (newIndex > imgNumber - 1) {
            newIndex = 0;
          } else {
            newIndex = imgIndex + 1;
          }

          document.querySelector("#current-img").remove();

          let getImgWindow = document.querySelector(".img-window");
          let newImg = document.createElement("img");
          getImgWindow.appendChild(newImg);

          let imgValue = imgArray[newIndex];
          let imgUrl = imgValue.getAttribute("src");

          let newUrl = imgUrl;

          newImg.setAttribute("id", "current-img");

          newImg.setAttribute("src", newUrl);

          imgIndex = newIndex;

          newImg.onload = function () {
            let imgWidth = this.width;
            let calcImgToEdge = (windowWidth - imgWidth) / 2 + 10;

            let nextBtn = document.querySelector(".img-btn-next");
            nextBtn.style.cssText = "right: " + calcImgToEdge + "px";
            let prevBtn = document.querySelector(".img-btn-prev");
            prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
          };
        };

        newImgWindow.onclick = function () {
          newImgWindow.remove();
          newPrevBtn.remove();
          newNextBtn.remove();
        };
      };
    };
  });
}
