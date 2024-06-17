import Scrollbar from "smooth-scrollbar";

import { ScrollbarPlugin } from "smooth-scrollbar";

import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const options = {
  renderByPixels: false,
  alwaysShowTracks: true,
};

Scrollbar.initAll(document.querySelector("#my-scrollbar"), options);

Scrollbar.use(OverscrollPlugin);

Scrollbar.init(elem, {
  plugins: {
    overscroll: overscrollOptions | true,
  },
});

const overscrollOptions = {
  enable: true,
  effect: navigator.userAgent.match(/Android/) ? "glow" : "bounce",
  damping: 0.2,
  maxOverscroll: 150,
  glowColor: "#222a2d",
};
