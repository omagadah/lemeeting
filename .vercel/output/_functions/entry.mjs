import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_jnuXbiAN.mjs';
import { manifest } from './manifest_D1P9al5v.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/chat.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/en.astro.mjs');
const _page6 = () => import('./pages/fr.astro.mjs');
const _page7 = () => import('./pages/homes/mobile-app.astro.mjs');
const _page8 = () => import('./pages/homes/personal.astro.mjs');
const _page9 = () => import('./pages/homes/saas.astro.mjs');
const _page10 = () => import('./pages/homes/startup.astro.mjs');
const _page11 = () => import('./pages/landing/click-through.astro.mjs');
const _page12 = () => import('./pages/landing/lead-generation.astro.mjs');
const _page13 = () => import('./pages/landing/pre-launch.astro.mjs');
const _page14 = () => import('./pages/landing/product.astro.mjs');
const _page15 = () => import('./pages/landing/sales.astro.mjs');
const _page16 = () => import('./pages/landing/subscription.astro.mjs');
const _page17 = () => import('./pages/pricing.astro.mjs');
const _page18 = () => import('./pages/privacy.astro.mjs');
const _page19 = () => import('./pages/rss.xml.astro.mjs');
const _page20 = () => import('./pages/services.astro.mjs');
const _page21 = () => import('./pages/terms.astro.mjs');
const _page22 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page23 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page24 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page25 = () => import('./pages/index.astro.mjs');
const _page26 = () => import('./pages/_---blog_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/chat.js", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/en.astro", _page5],
    ["src/pages/fr.astro", _page6],
    ["src/pages/homes/mobile-app.astro", _page7],
    ["src/pages/homes/personal.astro", _page8],
    ["src/pages/homes/saas.astro", _page9],
    ["src/pages/homes/startup.astro", _page10],
    ["src/pages/landing/click-through.astro", _page11],
    ["src/pages/landing/lead-generation.astro", _page12],
    ["src/pages/landing/pre-launch.astro", _page13],
    ["src/pages/landing/product.astro", _page14],
    ["src/pages/landing/sales.astro", _page15],
    ["src/pages/landing/subscription.astro", _page16],
    ["src/pages/pricing.astro", _page17],
    ["src/pages/privacy.md", _page18],
    ["src/pages/rss.xml.ts", _page19],
    ["src/pages/services.astro", _page20],
    ["src/pages/terms.md", _page21],
    ["src/pages/[...blog]/[category]/[...page].astro", _page22],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page23],
    ["src/pages/[...blog]/[...page].astro", _page24],
    ["src/pages/index.astro", _page25],
    ["src/pages/[...blog]/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3fa70c72-0b1c-495e-9a49-16cda3c42b6e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
