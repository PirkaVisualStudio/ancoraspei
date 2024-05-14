import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#gallery--getting-started",
  children: "a",
  initialZoomLevel: "fill",
  secondaryZoomLevel: 1,
  maxZoomLevel: 2,

  pswpModule: () => import("photoswipe"),
});
lightbox.init();
