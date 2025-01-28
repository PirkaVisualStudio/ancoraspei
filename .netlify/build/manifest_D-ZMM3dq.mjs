import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_B7AZeAVu.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/pirka/Web/ZID/web24/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hvala.DcBOCcRj.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hvala.DcBOCcRj.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/hvala","isIndex":false,"type":"page","pattern":"^\\/hvala\\/?$","segments":[[{"content":"hvala","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hvala.astro","pathname":"/hvala","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hvala.DcBOCcRj.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/kontakt","isIndex":false,"type":"page","pattern":"^\\/kontakt\\/?$","segments":[[{"content":"kontakt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kontakt.astro","pathname":"/kontakt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hvala.DcBOCcRj.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/o-nama","isIndex":false,"type":"page","pattern":"^\\/o-nama\\/?$","segments":[[{"content":"o-nama","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/o-nama.astro","pathname":"/o-nama","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hvala.DcBOCcRj.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/polica","isIndex":false,"type":"page","pattern":"^\\/polica\\/?$","segments":[[{"content":"polica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/polica.astro","pathname":"/polica","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hvala.DcBOCcRj.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://zidinterijeri.hr/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/hvala@_@astro":"pages/hvala.astro.mjs","\u0000@astro-page:src/pages/kontakt@_@astro":"pages/kontakt.astro.mjs","\u0000@astro-page:src/pages/o-nama@_@astro":"pages/o-nama.astro.mjs","\u0000@astro-page:src/pages/polica@_@astro":"pages/polica.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D-ZMM3dq.mjs","/Users/pirka/Web/ZID/web24/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dfj5vdcS.mjs","/Users/pirka/Web/ZID/web24/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.iAnikD7_.js","/Users/pirka/Web/ZID/web24/src/layouts/MainLayoutHR.astro?astro&type=script&index=0&lang.ts":"_astro/MainLayoutHR.astro_astro_type_script_index_0_lang.C6EGg2yC.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/pirka/Web/ZID/web24/src/pages/index.astro?astro&type=script&index=0&lang.ts","var t=document.getElementsByClassName(\"accordion\"),e;for(e=0;e<t.length;e++)t[e].addEventListener(\"click\",function(){this.classList.toggle(\"active\");var a=this.nextElementSibling;a.classList.toggle(\"panel-active\")});"]],"assets":["/_astro/zid_logo_full_accent.CT-7ZsWU.svg","/_astro/apartment2.DOhmlvEG.jpg","/_astro/apartment1.bUJpCRdi.jpg","/_astro/apartment3.DBRr-gi6.jpg","/_astro/seo.DlmnhcLO.jpg","/_astro/woman1.wpKUrxvq.jpg","/_astro/zid_icon_dark.BwU9YfbP.svg","/_astro/zid_logo_submark_accent.d4ml1rNo.svg","/_astro/hvala.DcBOCcRj.css","/favicon.svg","/robots.txt","/test.php","/_astro/MainLayoutHR.astro_astro_type_script_index_0_lang.C6EGg2yC.js","/fonts/recoletaalt-black.woff","/fonts/recoletaalt-black.woff2","/fonts/theseasons-reg.otf","/vendor/autoload.php","/images/logos/pirka_logo_badge.svg","/images/logos/pirkalogo_dark.svg","/vendor/composer/ClassLoader.php","/vendor/composer/InstalledVersions.php","/vendor/composer/LICENSE","/vendor/composer/autoload_classmap.php","/vendor/composer/autoload_namespaces.php","/vendor/composer/autoload_psr4.php","/vendor/composer/autoload_real.php","/vendor/composer/autoload_static.php","/vendor/composer/installed.json","/vendor/composer/installed.php","/vendor/composer/platform_check.php","/vendor/phpmailer/phpmailer/COMMITMENT","/vendor/phpmailer/phpmailer/LICENSE","/vendor/phpmailer/phpmailer/README.md","/vendor/phpmailer/phpmailer/SECURITY.md","/vendor/phpmailer/phpmailer/VERSION","/vendor/phpmailer/phpmailer/composer.json","/vendor/phpmailer/phpmailer/get_oauth_token.php","/vendor/phpmailer/phpmailer/src/DSNConfigurator.php","/vendor/phpmailer/phpmailer/src/Exception.php","/vendor/phpmailer/phpmailer/src/OAuth.php","/vendor/phpmailer/phpmailer/src/OAuthTokenProvider.php","/vendor/phpmailer/phpmailer/src/PHPMailer.php","/vendor/phpmailer/phpmailer/src/POP3.php","/vendor/phpmailer/phpmailer/src/SMTP.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-af.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-ar.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-as.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-az.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-ba.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-be.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-bg.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-bn.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-ca.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-cs.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-da.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-de.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-el.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-eo.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-es.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-et.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-fa.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-fi.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-fo.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-fr.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-gl.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-he.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-hi.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-hr.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-hu.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-hy.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-id.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-it.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-ja.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-ka.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-ko.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-lt.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-lv.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-mg.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-mn.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-ms.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-nb.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-nl.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-pl.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-pt.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-pt_br.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-ro.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-ru.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-si.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-sk.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-sl.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-sr.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-sr_latn.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-sv.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-tl.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-tr.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-uk.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-vi.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-zh.php","/vendor/phpmailer/phpmailer/language/phpmailer.lang-zh_cn.php"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"MheB9E9CR0f56QEtOedLNpUVjEw4Ue6rj4gKQuQg5hw="});

export { manifest };
