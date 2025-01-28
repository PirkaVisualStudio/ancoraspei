import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B7AZeAVu.mjs';
import 'kleur/colors';
import { $ as $$MainLayoutHR } from '../chunks/MainLayoutHR_BjUshS5f.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zidinterijeri.hr/");
const $$Hvala = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hvala;
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
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayoutHR, { "lang": lang, "pageIndex": "hvala", "pageIndexEn": "thanks", "title": title, "charset": charset, "description": description, "canonical": canonical, "openGraph": openGraph, "extend": extend }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-nav wrapper center"> <div class="section"> <h1 class="h2 padt-900">Hvala</h1> <p class="body padb-200">
Vaš upit je poslan, pokušat ćemo odgovoriti u što kraćem roku.
</p> <a href="/">NATRAG</a> </div> </section> ` })}`;
}, "/Users/pirka/Web/ZID/web24/src/pages/hvala.astro", void 0);

const $$file = "/Users/pirka/Web/ZID/web24/src/pages/hvala.astro";
const $$url = "/hvala";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hvala,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
