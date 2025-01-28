import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, c as createAstro, d as renderScript } from '../chunks/astro/server_B7AZeAVu.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$MainLayoutHR } from '../chunks/MainLayoutHR_BjUshS5f.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_Tu-qzTmc.mjs';
export { renderers } from '../renderers.mjs';

const logo = new Proxy({"src":"/_astro/zid_logo_full_accent.CT-7ZsWU.svg","width":225,"height":170,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirka/Web/ZID/web24/src/images/logos/zid_logo_full_accent.svg";
							}
							
							return target[name];
						}
					});

const apartment1 = new Proxy({"src":"/_astro/apartment1.bUJpCRdi.jpg","width":440,"height":450,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirka/Web/ZID/web24/src/images/hero/apartment1.jpg";
							}
							
							return target[name];
						}
					});

const apartment2 = new Proxy({"src":"/_astro/apartment2.DOhmlvEG.jpg","width":440,"height":450,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirka/Web/ZID/web24/src/images/hero/apartment2.jpg";
							}
							
							return target[name];
						}
					});

const apartment3 = new Proxy({"src":"/_astro/apartment3.DBRr-gi6.jpg","width":440,"height":450,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirka/Web/ZID/web24/src/images/hero/apartment3.jpg";
							}
							
							return target[name];
						}
					});

const woman1 = new Proxy({"src":"/_astro/woman1.wpKUrxvq.jpg","width":667,"height":888,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirka/Web/ZID/web24/src/images/people/woman1.jpg";
							}
							
							return target[name];
						}
					});

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="wrapper center"> <div class=""> <p class="txt-label upper txt-center clr-prim-acc padb-400">
što kažu drugi
</p> <h2 class="h2 txt-center padb-800">
Naši klijenti <span class="italic clr-prim-acc">o nama</span> </h2> </div> <div class="container"> <div class="box"> <div class="image"> ${renderComponent($$result, "Image", $$Image, { "src": woman1, "alt": "woman portrait", "format": "webp", "loading": "eager" })} </div> <div class="content"> <div class="stars"> ${renderComponent($$result, "Icon", $$Icon, { "name": "star" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "star" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "star" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "star" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "star" })} </div> <div class="text"> <div class="body-bold padb-200">Ivana Dizajnić</div> <p class="body-large">
Zorana je profesionalac u svome poslu! Ispunila je sva moja
            očekivanja i savršeno pretočila moju viziju u stvarnost.
</p> </div> </div> </div> </div> </div>`;
}, "/Users/pirka/Web/ZID/web24/src/components/elements/Testimonial.astro", void 0);

const $$Astro = createAstro("https://zidinterijeri.hr/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
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
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayoutHR, { "lang": lang, "brandTitle,": true, "pageIndex": "", "pageIndexEn": "", "title": title, "charset": charset, "description": description, "canonical": canonical, "openGraph": openGraph, "extend": extend }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="center hero-home flex-column"> <div class="flex-left"> <div class="container wrapper center"> ${renderComponent($$result2, "Image", $$Image, { "src": logo, "alt": "zid interior design full logo", "format": "avif", "loading": "eager", "id": "heroLogo" })} <h1 class="h1 padb-800">
Dizajn interijera po vašoj<span class="italic clr-prim-acc">
mjeri</span> </h1> <p class="body">
Pretvaramo vašu viziju u stvarnost, a vaš dom u mjesto u kojem
          pripadate.
</p> </div> </div> <div class="flex-right"> ${renderComponent($$result2, "Image", $$Image, { "src": apartment1, "alt": "zid interior apartment design", "format": "webp", "loading": "eager" })} </div> </section>  <section class="faq section" id="faqa"> <div class="wrapper-medium center"> <div class="container"> <h2 class="h2 padb-400">Česta pitanja</h2> <p class="body-large padb-400">
Ako se niste prije susreli sa nama osobno ili ste novi u svijetu
          dizajna interijera, ova pitanja Vam mogu pomoći.
</p> <div class="question"> <div class="accordion">
Zašto nemate cijene?${renderComponent($$result2, "Icon", $$Icon, { "class": "faq-icon", "name": "mdi:keyboard-arrow-down", "width": 28, "height": 28 })} </div> <div class="panel"> <p class="body">
Svakom projektu pristupamo indivdualno jer i svaka osoba ima
              određene zahtjeve. Shodno tome, kroz razgovor sa klijentom, radimo
              poseban plan pripreme i ponude u kojem uključujemo cijenu svoje
              usluge.
</p> </div> </div> <div class="question"> <div class="accordion">
Kako ću znati koliko mogu potrošiti?${renderComponent($$result2, "Icon", $$Icon, { "class": "faq-icon", "name": "mdi:keyboard-arrow-down", "width": 28, "height": 28 })} </div> <div class="panel"> <p class="body">
U našem inicijalnom dogovoru također možemo definirati određeni
              budžet kako bi bili sigurni da će Vaš ukupni trošak ostati u
              dozvoljenim granicama.
</p> </div> </div> <div class="question"> <div class="accordion">
Što točno vi nudite?${renderComponent($$result2, "Icon", $$Icon, { "class": "faq-icon", "name": "mdi:keyboard-arrow-down", "width": 28, "height": 28 })} </div> <div class="panel"> <p class="body">
Nudimo usluge dizajna vašeg interijera kao i nabavku svih
              potrebnih elemenata za uređenje.
</p> </div> </div> <div class="question"> <div class="accordion">
Što je sa izvođačkim radovima?${renderComponent($$result2, "Icon", $$Icon, { "class": "faq-icon", "name": "mdi:keyboard-arrow-down", "width": 28, "height": 28 })} </div> <div class="panel"> <p class="body">
Konstrukcijski i građevinski radovi nisu dio naše usluge ali kao
              dizajneri blisko surađujemo sa svim izvođačima kako bi bili
              sigurni da će naša i Vaša vizija biti ispravno implementirana.
</p> </div> </div> </div> </div> </section>  <section class="testimonial section"> ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} </section>  <section class="cta bg-prim-acc"> <div class="wrapper center"> <p class="txt-label upper txt-center clr-main-light padb-400">
besplatne konzultacije
</p> <h2 class="h2 txt-center padb-800 clr-main-light">
Dizajnirajte svoj dom <br> iz <span class="italic clr-sec-acc">snova</span> </h2> <p class="body-large clr-main-light txt-center padb-400">
Javite nam se za besplatne konzultacije kako bi zajedno pronašli
        optimalno rješenje za vas.
</p> </div> <div class="wrapper-medium flex-center"> <a href="/kontakt/"> <div class="btn-fill">KONTAKT</div></a> </div> </section>  <section class="examples"> <div class="wrapper center"> <p class="txt-label upper txt-center clr-prim-acc padb-400">
umjetnost & dom
</p> <h2 class="h2 txt-center padb-800">
Kvalitetno dizajniran dom <br> je <span class="italic clr-prim-acc">umjetničko djelo</span> </h2> </div> <div class="wrapper-medium center txt-center"> <p class="body-large center padb-800">
Lijepo uređen dom nije samo pitanje estetike već i odraza onoga što nas
        definira kao osobu. Naša osobnost, duh i karakter su značajke koje bitno
        utječu na našu percepciju svijeta i okoline. Dopustite da prilagodimo
        prostor u kojem živite upravo u onom tonu u kojem najbolje vladate.
</p> <a href="/kontakt/"> <div class="btn-fill marb-900">KONTAKT</div></a> </div> <div class="columns wrapper center"> <div class="box"> ${renderComponent($$result2, "Image", $$Image, { "src": apartment1, "alt": "zid interior apartment design", "format": "webp", "loading": "eager" })} </div> <div class="box"> ${renderComponent($$result2, "Image", $$Image, { "src": apartment2, "alt": "zid interior apartment design", "format": "webp", "loading": "eager" })} </div> <div class="box"> ${renderComponent($$result2, "Image", $$Image, { "src": apartment3, "alt": "zid interior apartment design", "format": "webp", "loading": "eager" })} </div> </div> </section>  <section class="message"> <div class="wrapper center"> <div class="container"> <div class="box"> <h2 class="title">
vaša <span class="italic clr-sec-acc">vizija</span> je naš cilj
</h2> </div> <div class="box"> <p class="padb-600 body">
Dom nije samo fizička lokacija na kojoj boravimo. On je puno više.
            Naše je utočište u teškim vremenima ali i mjesto radosti i veselja
            koje djelimo samo sa onima koji su nam najbliskiji. <br><br> Poklonite
            svojim najmilijima toplinu i sigurnost istinskog doma.
</p> <a href="/kontakt/"><div class="btn-fill">KONTAKT</div></a> </div> </div> </div> </section> ` })} ${renderScript($$result, "/Users/pirka/Web/ZID/web24/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pirka/Web/ZID/web24/src/pages/index.astro", void 0);

const $$file = "/Users/pirka/Web/ZID/web24/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
