import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B7AZeAVu.mjs';
import 'kleur/colors';
import { s as siteInfo, $ as $$MainLayoutHR } from '../chunks/MainLayoutHR_BjUshS5f.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zidinterijeri.hr/");
const $$ONama = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ONama;
  const {
    title,
    lang,
    charset,
    description,
    canonical,
    noindex,
    nofollow,
    openGraph,
    languageAlternates,
    extend
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayoutHR, { "lang": lang, "pageIndex": "o-nama", "pageIndexEn": "about", "title": "O nama" + siteInfo.map((i) => i.brand_tag), "charset": charset, "description": "Tko smo mi?" + siteInfo.map((i) => i.brand_tag), "canonical": canonical, "openGraph": openGraph, "extend": extend }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-full hero-home wrapper center"> <div class="container wrapper center"> <h1 class="h1 padb-800">O nama</h1> <p>saznajte malo više o nama</p> </div> </section> ` })}`;
}, "/Users/pirka/Web/ZID/web24/src/pages/o-nama.astro", void 0);

const $$file = "/Users/pirka/Web/ZID/web24/src/pages/o-nama.astro";
const $$url = "/o-nama";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ONama,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
