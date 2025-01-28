import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B7AZeAVu.mjs';
import 'kleur/colors';
import { $ as $$MainLayoutHR } from '../chunks/MainLayoutHR_BjUshS5f.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zidinterijeri.hr/");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const {
    title,
    charset,
    description,
    canonical,
    noindex,
    nofollow,
    openGraph,
    languageAlternates,
    extend
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayoutHR, { "lang": "hr", "pageIndex": "404", "pageIndexEn": "404", "title": "404 Error | Pirka", "charset": charset, "description": "Ova stranica ne postoji.", "canonical": canonical, "openGraph": openGraph, "extend": extend, "noindex": true, "nofollow": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-full wrapper center flex-bottom"> <div class="container"> <h1 class="h1">404 Error</h1> <p class="h5">
Nažalost, ova stranica ne postoji. Molimo vratite se na <a href="/">
početak</a> ili pokušajte nešto drugo.
</p> </div> </section> ` })}`;
}, "/Users/pirka/Web/ZID/web24/src/pages/404.astro", void 0);

const $$file = "/Users/pirka/Web/ZID/web24/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
