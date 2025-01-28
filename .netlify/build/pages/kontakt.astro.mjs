import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B7AZeAVu.mjs';
import 'kleur/colors';
import { s as siteInfo, $ as $$MainLayoutHR } from '../chunks/MainLayoutHR_BjUshS5f.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://zidinterijeri.hr/");
const $$Kontakt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kontakt;
  const {
    title,
    description,
    lang,
    charset,
    canonical,
    noindex,
    nofollow,
    openGraph,
    languageAlternates,
    extend
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", ' <!-- Google Captcha --> <script src="https://www.google.com/recaptcha/api.js" async defer><\/script>'])), renderComponent($$result, "MainLayout", $$MainLayoutHR, { "lang": lang, "pageIndex": "kontakt", "pageIndexEn": "contact", "title": "Kontakt" + siteInfo.map((i) => i.brand_tag), "charset": charset, "description": "Javite nam se sa upitom" + siteInfo.map((i) => i.brand_tag), "canonical": canonical, "openGraph": openGraph, "extend": extend, "noindex": true, "nofollow": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="wrapper center"> <div class="section"> <h1 class="h1 padt-900 mart-900">Kontakt</h1> <h3 class="body-bold body-large padb-400">
Pošaljite nam upit u vezi usluge koja vas zanima
</h3> <p class="body padb-900">
Potrudit ćemo se odgovoriti u što kraćem roku.
</p> <hr class="marb-900"> </div> </div> <form name="kontakt-forma" id="formContact" class="contact-form" method="POST" data-netlify="true" action="/hvala/" data-netlify-recaptcha="true"> <label class="body-bold" for="name">Ime:</label> <input type="text" id="name" name="name" placeholder="Ivo" required> <label class="body-bold" for="email">E-mail:</label> <input type="email" id="email" name="email" placeholder="info@mail.hr" required> <label class="body-bold" for="message">Poruka:</label> <textarea id="message" name="message" rows="4" placeholder="Zanima me..." required></textarea> <label class="body mart-900 marb-900 txt-center">
Molimo potvrdite da niste robot zbog sprječavanja spam pošte:
</label> <div class="g-recaptcha" data-sitekey="6LdMhb8qAAAAABsXSHht-lcUpFHVZ8s1rW1SwAzM"></div> <button type="submit" class="btn-form mart-900">POŠALJI</button> </form> </div> ` }));
}, "/Users/pirka/Web/ZID/web24/src/pages/kontakt.astro", void 0);

const $$file = "/Users/pirka/Web/ZID/web24/src/pages/kontakt.astro";
const $$url = "/kontakt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontakt,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
