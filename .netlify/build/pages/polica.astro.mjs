import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B7AZeAVu.mjs';
import 'kleur/colors';
import { s as siteInfo, $ as $$MainLayoutHR } from '../chunks/MainLayoutHR_BjUshS5f.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zidinterijeri.hr/");
const $$Polica = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Polica;
  const {
    title,
    lang,
    brandTitle,
    charset,
    description,
    canonical,
    noindex,
    nofollow,
    openGraph,
    languageAlternates,
    extend
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayoutHR, { "lang": lang, "pageIndex": "policy", "pageIndexEn": "policy", "title": "Pravila privatnosti" + siteInfo.map((i) => i.brand_tag), "charset": charset, "description": "Pravila privatnosti i regulativa" + siteInfo.map((i) => i.brand_tag), "canonical": canonical, "openGraph": openGraph, "extend": extend, "noindex": true, "nofollow": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-nav wrapper"> <div> <h1 class="h1 padt-200 padb-200 marb-200">Polica privatnosti</h1> <p>${brandTitle}</p> <h2 class="h3 padb-200">01. Kolačići (Cookie policy)</h2> <p class="body padb-200">
Internetska stranica <span class="body-bold">restaurantk-uzina.hr</span>
koristi kolačiće kako bi poboljšala Vaše iskustvo prilikom pregledavanja
        sadržaja stranice. Kolačići se privremeno pohranjuju na korisnička računala
<span class="body-bold">isključivo uz pristanak posjetitelja portala.</span> Kolačići nisu štetni za Vaša računala, niti prate Vaše surfanje po internetu,
        već služe za bolju preglednost stranica pirka.hr.<br> <br>Kolačići nam pomažu pružati, zaštititi i poboljšati naše
        proizvode, primjerice personalizacijom sadržaja, prilagođavanjem i
        mjerenjem oglasa. Premda se kolačići koje upotrebljavamo mogu povremeno
        mijenjati u skladu s poboljšanjima i ažuriranjima, upotrebljavamo ih za
        sljedeće svrhe:
</p> <ul class="indent padb-400 body"> <li>
&#8226 kako bi se sjetili informacija o Vama, a da nas ne morate
          stalno podsjećati,
</li> <li>&#8226 kako bi prilagodili oglase i doživljaj Vama</li> <li>&#8226 kako bi vodili analitiku o posjetima portala</li> </ul> <p class="body padb-400">
Kolačići ne sadrže nikakve osobne podatke i ne mogu poslužiti otkrivanju
        identiteta korisnika/posjetitelja.
</p> <h3 class="h5 padb-200">Koliko dugo traju kolačići?</h3> <p class="body padb-200">
Određeni kolačići spremaju se na tri mjeseca dok se pojedini kolačići
        pohranjuju zauvijek. Prilikom posjeta portalu mojbroker.com zatražit
        ćemo Vašu dozvolu za prikupljanje kolačića i uvijek nas možete odbiti.
<br><br>
Također, uvijek možete izbrisati svoje kolačiće unutar postavki vašeg preglednika.
</p><h3 class="h5 padb-200">Kolačići trećih strana</h3> <p class="body padb-200">
Koristimo i kolačiće trećih strana, poput Google Analyticsa, Google
          Adsensea i YouTubea koji nam služe za praćenje posjeta stranica
          portala.
</p>  </div> </section> ` })}`;
}, "/Users/pirka/Web/ZID/web24/src/pages/polica.astro", void 0);

const $$file = "/Users/pirka/Web/ZID/web24/src/pages/polica.astro";
const $$url = "/polica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Polica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
