# 🚀 `astro-modal`

[![NPM](https://img.shields.io/npm/v/@xexiu/astro-accordion)](https://www.npmjs.com/package/@xexiu/astro-accordion)
![Downloads](https://img.shields.io/npm/dt/@xexiu/astro-accordion.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/xexiu/astro-components/pulls)
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

## HELLO there 👋

- Twitter: <https://twitter.com/xexiudev> drop by and say hi, follow me and I follow you. Let's build a community.

> **ASTRO ACCORDION: HTML, CSS and a bit of javascript made with Custom Elements accordion for astro.** Uses API from browsers. Compatible with web/mobile, responsive, HTML5 semantic, SEO friendly. Lighthouse score 100%. Accesibility (ARIA attrs)
> Uses Custom Elements for a better optimization: `customElements.define('xe-accordion', Accordion);`
---
> Forking and giving a star will contribute to my motivation in making components for astro (react, react-native, etc...) that are purely HTML, CSS, SEO friendly and responsive :) (almost all components :P).
---
> **DEMO**: [Astro Accordion](https://xexiu.dev/demos/astro/accordion)
> This product is actively mantained. Any PR, issues or whatever concern, please visit the Github repository <https://github.com/xexiu/astro-components>.

## Tutorials Roadmap

- **Web2**: JavaScript, HTML, CSS, Node.js, Python (MLL, AI), React, NextJS React Native and more.
- **Web3**: Blockchain, WEB3, dApps, smart contracts and more.

## 📦 Installation

- Using bun:

``` javascript
bun i @xexiu/astro-accordion
```

- Using npm:

```javascript
npm i @xexiu/astro-accordion
```

## 🔁 API

```javascript
interface Props {
   isExpanded?: boolean[] // Optional - by default, accordion is not expanded;
   titles: string[] // Required;
   content: any[] // Required;
   btnClasses?: string // Optional;
   regionClasses?: string // Optional;
}
```

## 🛠 Usage in astro

```javascript
---
import Accordion from '@xexiu/astro-accordion';

const content = [
   'Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro <a href="#focusable">focusable link for test</a> consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.',
   'Hae duae <a href="#focusable">focusable link for test</a> provinciaebello quondam piratico catervis mixtae praedonum a Servilio proconsule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.',
   'Content 3'
];
---

<div>titles and content length must match</div>

<Accordion
   titles={[
      'Accordion heading 1',
      'Accordion heading 2',
      'Accordion heading 3'
   ]}
   content={content}
   isExpanded={[true, false, false]}
/>
```
---

##  ¡Chao pescao! 👋 🐠
